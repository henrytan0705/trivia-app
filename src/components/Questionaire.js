import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import QuestionTitle from "./question/QuestionTitle";
import AnswerChoices from "./question/AnswerChoices";

function Questionaire({ questions }) {
  const questionSet = questions || new Array(10).fill({ question: null });

  const [questionNumber, nextQuestion] = useState(0);

  const [currentQuestionTitle, nextTitle] = useState(
    questionSet[questionNumber].question
  );

  const [currentAnswerChoices, nextChoices] = useState(
    questionSet[questionNumber]
  );

  function next() {
    nextQuestion(questionNumber + 1);
    nextTitle(questionSet[questionNumber + 1].question);
    nextChoices(questionSet[questionNumber + 1]);
  }

  return (
    <Fragment>
      <h1>Current Question Number: {questionNumber + 1}</h1>

      <QuestionTitle title={currentQuestionTitle} />

      <AnswerChoices choices={currentAnswerChoices} next={next} />

      <button>
        <Link to="/">Menu</Link>
      </button>
    </Fragment>
  );
}

export default Questionaire;
