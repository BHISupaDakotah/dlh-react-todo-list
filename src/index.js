// entry point for app

import React from "react";
import ReactDOM from "react-dom";

import "./styles/main.scss";
import App from "./components/App";

const root = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);
