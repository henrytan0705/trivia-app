import React, { Fragment } from "react";

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
        <button onClick={e => submitAnswer(e)} key={index}>
          {choice}
        </button>
      ))}
    </Fragment>
  );
}

export default AnswerChoices;
