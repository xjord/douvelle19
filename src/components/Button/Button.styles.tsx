import styled from 'styled-components';

import { DISABLED_BLACK_OPACITY, WHITE, BLACK } from '../../constants/index';

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
  background-color: ${(p) => (p.$disabled ? DISABLED_BLACK_OPACITY : WHITE)};
  font-weight: 500;
  border-radius: 4px;
  color: ${BLACK};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export { ButtonWrapper };
