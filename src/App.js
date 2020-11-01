import React, { Fragment, useState } from "react";
import { Route } from "react-router-dom";
import Menu from "./components/Menu";
import Questionaire from "./components/Questionaire";
import Results from "./components/Results";
import data from "./data/Apprentice_TandemFor400_Data";

function App() {
  const [questions, setQuestions] = useState(0);

  function getQuestions() {
    let allQuestions = data;
    setQuestions(shuffle(allQuestions).slice(0, 10));
  }

  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  return (
    <Fragment>
      <Route
        exact
        path="/"
        render={props => <Menu {...props} getQuestions={getQuestions} />}
      />

      <Route
        exact
        path="/questionaire"
        render={props => <Questionaire {...props} questions={questions} />}
      />

      <Route exact path="/results" render={props => <Results {...props} />} />
    </Fragment>
  );
}

export default App;
