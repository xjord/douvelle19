import styled from 'styled-components';

import { GREY_DARK, GREY, PINK } from '../../constants/index';

const TextFieldWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90px;
  margin-bottom: 32px;
  width: 100%;
  max-width: 500px;
`;

const TextFieldLabel = styled.div`
  width: 100%;
  text-align: left;
  min-height: 20px;
  margin-bottom: 8px;
`;

const TextFieldInput = styled.input`
  width: 100%;
  background-color: ${GREY_DARK};
  color: ${GREY};
  border-radius: 4px;
  font-size: 16px;
  border-width: 0;
  padding: 16px;
  height: 48px;

  &:focus {
    outline: none;
  }
`;

const TextFieldErrorMessage = styled.div`
  font-size: 14px;
  margin-top: 8px;
  min-height: 24px;
  width: 100%;
  text-align: left;
  color: ${PINK};
`;

export { TextFieldWrapper, TextFieldLabel, TextFieldInput, TextFieldErrorMessage };
