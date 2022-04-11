import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

import { ButtonWrapper } from './Button.styles';

interface ButtonProps {
  children: JSX.Element | string;
  isLoading?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  width?: number;
}

const Button = (props: ButtonProps) => {
  const { children, isLoading = false, onClick, disabled = false, width } = props;

  return (
    <ButtonWrapper $disabled={disabled} $width={width} onClick={() => (!disabled ? onClick() : null)}>
      {isLoading ? <ClipLoader size={24} color="black" /> : children}
    </ButtonWrapper>
  );
};

export default Button;
