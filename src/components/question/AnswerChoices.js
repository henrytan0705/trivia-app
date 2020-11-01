import React, { Fragment, useState } from "react";

function AnswerChoices({ choices, next }) {
  return (
    <Fragment>
      <div>Choices:</div>

      <button onClick={() => next()}>Next</button>
    </Fragment>
  );
}

export default AnswerChoices;
