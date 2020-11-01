import React, { Fragment } from "react";

function AnswerChoices({ choices, next }) {
  const incorrect = choices.incorrect;
  const correct = choices.correct;
  const allChoices = [...incorrect, correct];

  function submitAnswer(e) {
    next();
  }

  return (
    <Fragment>
      <div>Choices:</div>

      {allChoices.map((choice, index) => (
        <button onClick={e => submitAnswer(e)} key={index}>
          {choice}
        </button>
      ))}
    </Fragment>
  );
}

export default AnswerChoices;
