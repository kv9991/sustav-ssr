import express from "express";
import path from "path";
import fs from "fs";
import React from "react";
import { printDrainHydrateMarks } from "react-imported-component";
import App from "../shared/components/App";
import Routes from "../shared/components/Routes";
import { StaticRouter, matchPath } from "react-router-dom";
import ReactDOMServer from "react-dom/server";
import routes from "../shared/routes";

const app = express();

app.use("/static", express.static(path.join(__basedir, "./dist/client")));

app.get("*", (req, res, next) => {
  const activeRoute = routes.find(route => matchPath(req.url, route)) || {};

  const fetchInitial = activeRoute.fetchInitialData
    ? activeRoute.fetchInitialData(req, res)
    : Promise.resolve();

  fetchInitial
    .then(data => {
      const context = {};
      const app = ReactDOMServer.renderToString(
        <App
          router={children => (
            <StaticRouter location={req.url} context={context}>
              {children}
            </StaticRouter>
          )}
        >
          <Routes />
        </App>
      );

      const indexFile = path.join(__basedir, "./dist/client/index.html");

      fs.readFile(indexFile, "utf8", (err, html) => {
        if (err) {
          console.error("Something went wrong:", err);
          return res.status(500).send("Oops, better luck next time!");
        }

        const htmlWithData = html.replace(
          '<script id="INITIAL_DATA"></script>',
          `<script id="INITIAL_DATA">window.INITIAL_DATA = ${JSON.stringify(
            data
          )}</script>`
        );
        const htmlWithReact = htmlWithData.replace(
          '<div id="root"></div>',
          `<div id="root">${app}</div>${printDrainHydrateMarks()}`
        );

        return res.send(htmlWithReact);
      });
    })
    .catch(next);
});

app.listen(3000, () => {
  console.log("Running on http://localhost:3000/");
});
