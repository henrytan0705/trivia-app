import React, { Fragment } from "react";

function Choice({ choice, submitAnswer }) {
  return (
    <Fragment>
      <button onClick={submitAnswer}>{choice}</button>
    </Fragment>
  );
}

export default Choice;
