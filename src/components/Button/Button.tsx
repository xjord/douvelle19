import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

import useStyles from "./Button.styles";

const Button = (props) => {
  const { text, isLoading } = props;

  const classes = useStyles();

  return (
    <div className={classes.button}>
      {isLoading ? <ClipLoader loading size={40} color="white" /> : text}
    </div>
  );
};

export default Button;
