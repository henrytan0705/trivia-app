import React, { Fragment } from "react";

function QuestionTitle({ title }) {
  return (
    <Fragment>
      <h1>Question: {title}</h1>
    </Fragment>
  );
}

export default QuestionTitle;
