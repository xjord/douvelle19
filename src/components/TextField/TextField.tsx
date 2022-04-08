import React from 'react';

import { TextFieldWrapper, TextFieldLabel, TextFieldInput, TextFieldErrorMessage } from './TextField.styles';

interface TextFieldProps {
  label?: string;
  onChange: (value: string) => void;
  value?: string;
  type?: 'text' | 'submit' | 'number';
  placeholder?: string;
  errorMessage?: string;
}

const TextField = (props: TextFieldProps) => {
  const { label, onChange, value, type, placeholder, errorMessage } = props;

  return (
    <TextFieldWrapper>
      {label && <TextFieldLabel>{label}</TextFieldLabel>}
      <TextFieldInput
        onChange={(event) => onChange(event.target.value)}
        value={value}
        type={type}
        placeholder={placeholder}
      />
      {errorMessage && <TextFieldErrorMessage>{errorMessage}</TextFieldErrorMessage>}
    </TextFieldWrapper>
  );
};

export default TextField;
