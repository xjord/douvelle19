import styled from 'styled-components';

interface ButtonProps {
  width?: number;
  disabled?: boolean;
}

const ButtonWrapper = styled.div<ButtonProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 48px;
  padding-left: 30px;
  padding-right: 30px;
  width: ${(p) => (p.$width ? `${p.$width}px` : '100%')};
  background-color: ${(p) => (p.$disabled ? 'rgba(255, 255, 255, 0.5)' : 'white')};
  font-size: 16px;
  font-weight: 500;
  border-radius: 4px;
  color: black;
  cursor: pointer;

  &:active {
    opacity: 0.8;
  }
`;

export { ButtonWrapper };
