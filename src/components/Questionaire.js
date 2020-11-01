import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import QuestionTitle from "./question/QuestionTitle";
import AnswerChoices from "./question/AnswerChoices";

function Questionaire(props) {
  const questionSet = props.questions || new Array(10).fill({ question: null });

  const [questionNumber, nextQuestion] = useState(0);

  const [currentQuestionTitle, nextTitle] = useState(
    questionSet[questionNumber].question
  );

  const [currentAnswerChoices, nextChoices] = useState(
    questionSet[questionNumber]
  );

  const [score, updateScore] = useState(0);

  function next() {
    if (questionNumber < 9) {
      nextQuestion(questionNumber + 1);
      nextTitle(questionSet[questionNumber + 1].question);
      nextChoices(questionSet[questionNumber + 1]);
    } else {
      props.history.push({ pathname: "/results", state: { detail: score } });
    }
  }

  if (!props.questions.length) return <Redirect to="/" />;

  return (
    <Fragment>
      <button>
        <Link to="/">Menu</Link>
      </button>

      <h1>Current Question: {questionNumber + 1}/10</h1>
      <QuestionTitle title={currentQuestionTitle} />

      <AnswerChoices
        choices={currentAnswerChoices}
        next={next}
        score={score}
        updateScore={updateScore}
      />
    </Fragment>
  );
}

export default Questionaire;
