import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Menu from "./components/Menu";

function App() {
  return (
    <Fragment>
      <Route exact path="/" component={Menu} />
    </Fragment>
  );
}

export default App;
