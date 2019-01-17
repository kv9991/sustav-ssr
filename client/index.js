import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Layout from "./core/Layout";
import Routes from "./core/Routes";

ReactDOM.hydrate(
  <BrowserRouter>
    <Layout>
      <Routes />
    </Layout>
  </BrowserRouter>,
  document.getElementById("root")
);
