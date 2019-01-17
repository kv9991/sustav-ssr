import express from "express";
import path from "path";
import fs from "fs";
import React from "react";
import Loadable from "react-loadable";
import Layout from "../client/core/Layout";
import Routes from "../client/core/Routes";
import { StaticRouter } from "react-router-dom";
import ReactDOMServer from "react-dom/server";

const app = express();

app.use("/static", express.static(path.join(__basedir, "./dist/client")));

app.get("*", (req, res) => {
  const context = {};
  const app = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <Layout>
        <Routes />
      </Layout>
    </StaticRouter>
  );

  const indexFile = path.join(__basedir, "./dist/client/index.html");

  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.error("Something went wrong:", err);
      return res.status(500).send("Oops, better luck next time!");
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });
});

Loadable.preloadAll().then(() => {
  app.listen(3000, () => {
    console.log("Running on http://localhost:3000/");
  });
});
