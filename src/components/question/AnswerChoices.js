import React, { Fragment } from "react";
import Choice from "./Choice";

function AnswerChoices({ choices, next, score, updateScore }) {
  const incorrect = choices.incorrect;
  const correct = choices.correct;
  const allChoices = [...incorrect, correct];

  function submitAnswer(e) {
    if (checkAnswer(e.target.innerHTML)) {
      updateScore(score + 1);
    }
    next();
  }

  function checkAnswer(answer) {
    return answer === correct ? true : false;
  }

  return (
    <Fragment>
      <div>Choices:</div>

      {allChoices.map((choice, index) => (
        <Choice choice={choice} key={index} submitAnswer={submitAnswer} />
      ))}
    </Fragment>
  );
}

export default AnswerChoices;
