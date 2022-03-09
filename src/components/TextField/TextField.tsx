import React from 'react';

import { TextFieldWrapper, TextFieldLabel, TextFieldInput, TextFieldErrorMessage } from './TextField.styles';

const TextField = (props) => {
  const { label, onChange, value, type, placeholder, errorMessage } = props;

  return (
    <TextFieldWrapper>
      <TextFieldLabel>{label}</TextFieldLabel>
      <TextFieldInput>
        <input onChange={(event) => onChange(event.target.value)} value={value} type={type} placeholder={placeholder} />
      </TextFieldInput>
      <TextFieldErrorMessage>{errorMessage}</TextFieldErrorMessage>
    </TextFieldWrapper>
  );
};

export default TextField;
