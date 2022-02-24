import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

import useStyles from "./Button.styles";

const Button = (props) => {
  const { children, isLoading = false, onClick } = props;

  const classes = useStyles();

  return (
    <div className={classes.button} onClick={onClick}>
      {isLoading ? <ClipLoader size={24} color="black" /> : children}
    </div>
  );
};

export default Button;
