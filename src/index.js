import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter as Router, Switch } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <App />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
