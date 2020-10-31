import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Menu from "./components/Menu";
import Questionaire from "./components/Questionaire";

function App() {
  return (
    <Fragment>
      <Route exact path="/" component={Menu} />
      <Route exact path="/questionaire" component={Questionaire} />
    </Fragment>
  );
}

export default App;
