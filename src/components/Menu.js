import React from "react";
import { Link } from "react-router-dom";

function Menu({ getQuestions }) {
  return (
    <div>
      <h1>Tandem Trivia</h1>

      <button onClick={() => getQuestions()}>
        <Link to="/questionaire">Start Quiz</Link>
      </button>
    </div>
  );
}

export default Menu;
