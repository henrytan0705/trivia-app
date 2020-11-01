import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Results(props) {
  return (
    <Fragment>
      <div>Results Page</div>
      <div>Score: {props.location.state.detail}</div>
      <button>
        <Link to="/">Menu</Link>
      </button>
    </Fragment>
  );
}

export default Results;
