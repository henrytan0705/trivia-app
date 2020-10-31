import React, { Fragment } from "react";
import QuestionTitle from "./question/QuestionTitle";
import AnswerChoices from "./question/AnswerChoices";

function Questionaire() {
  return (
    <Fragment>
      <QuestionTitle />
      <AnswerChoices />
    </Fragment>
  );
}

export default Questionaire;
