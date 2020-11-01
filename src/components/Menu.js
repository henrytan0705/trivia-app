import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../assets/stylesheets/menu/menu.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

function Menu({ getQuestions }) {
  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1)
    }
  }));

  const classes = useStyles();

  return (
    <Fragment>
      <div className="menu">
        <Button
          onClick={() => getQuestions()}
          variant="contained"
          color="primary"
          className={`${classes.button} start-button`}
        >
          <Link to="/questionaire">Start Quiz</Link>
        </Button>
      </div>
    </Fragment>
  );
}

export default Menu;
