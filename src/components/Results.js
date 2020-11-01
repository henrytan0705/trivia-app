import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Results(props) {
  const score = localStorage.getItem("score");

  return (
    <Fragment>
      <h1>Results</h1>
      <div>Score: {score} / 10 </div>

      <div>{(score * 100) / 10} %</div>

      <button>
        <Link to="/">Menu</Link>
      </button>
    </Fragment>
  );
}

export default Results;
