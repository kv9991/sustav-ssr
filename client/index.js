import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "../shared/components/App";
import Routes from "../shared/components/Routes";

ReactDOM.hydrate(
  <App router={children => <BrowserRouter>{children}</BrowserRouter>}>
    <Routes />
  </App>,
  document.getElementById("root")
);
