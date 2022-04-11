import styled from 'styled-components';

import { BLACK, WHITE, PINK } from '../../constants/index';

interface SubscriptionFormProps {
  subscribed?: boolean;
}

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  flew-wrap: wrap;
  align-items: center;
  justify-content: center;
  color: ${WHITE};
  width: 100%;
  background-color: ${BLACK};
  border-radius: 8px;
  overflow: hidden;
  padding: 3% 10%;
`;

const FormTitle = styled.div`
  width: 100%;
  max-width: 400px;
  text-align: center;
  margin-bottom: 10%;
  margin-top: 5%;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const FormMessage = styled.div<SubscriptionFormProps>`
  text-align: center;
  font-size: 14px;
  max-width: 450px;
  color: ${WHITE};
  color: ${(p) => (p.$subscribed ? PINK : WHITE)};
  margin-top: 28px;
`;

export { FormWrapper, FormTitle, Form, FormMessage };
