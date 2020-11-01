import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Results() {
  return (
    <Fragment>
      <div>Results Page</div>
      <button>
        <Link to="/">Menu</Link>
      </button>
    </Fragment>
  );
}

export default Results;
