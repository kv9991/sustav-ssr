import React from "react";
import ReactDOM from "react-dom";
import { rehydrateMarks } from "react-imported-component";
import { BrowserRouter } from "react-router-dom";
import App from "../shared/components/App";
import Routes from "../shared/components/Routes";
import importedComponents from "../shared/imported";

rehydrateMarks().then(() =>
  ReactDOM.hydrate(
    <App router={children => <BrowserRouter>{children}</BrowserRouter>}>
      <Routes />
    </App>,
    document.getElementById("root")
  )
);
