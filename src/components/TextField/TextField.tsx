import React from "react";

import useStyles from "./TextField.styles";

const TextField = (props) => {
  const { label, onChange, value, type, placeholder } = props;

  const classes = useStyles();

  return (
    <div className={classes.textField}>
      <div className={classes.textFieldLabel}>{label}</div>
      <input
        className={classes.textFieldInput}
        onChange={(event) => onChange(event.target.value)}
        value={value}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextField;
