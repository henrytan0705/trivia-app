import React, { Fragment } from "react";

function AnswerChoices({ choices, next }) {
  const incorrect = choices.incorrect;
  const correct = choices.correct;
  const allChoices = [...incorrect, correct];

  return (
    <Fragment>
      <div>Choices:</div>

      {allChoices.map((choice, index) => (
        <div key={index}> {choice} </div>
      ))}

      <button onClick={() => next()}>Next</button>
    </Fragment>
  );
}

export default AnswerChoices;
