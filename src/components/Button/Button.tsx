import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

import useStyles from './Button.styles';

const Button = (props) => {
  const { children, isLoading = false, onClick, disabled = false, width } = props;

  const classes = useStyles({ width, disabled });

  return (
    <div className={classes().button} onClick={!disabled && onClick}>
      {isLoading ? <ClipLoader size={24} color="black" /> : children}
    </div>
  );
};

export default Button;
