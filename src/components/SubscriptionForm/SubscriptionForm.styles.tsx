import styled from 'styled-components';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  flew-wrap: wrap;
  align-items: center;
  justify-content: center;
  color: white;
  width: 100%;
  background-color: black;
  border-radius: 8px;
  padding: 3% 10%;
`;

const FormTitle = styled.div`
  width: 100%;
  max-width: 500px;
  text-align: center;
  margin-bottom: 5%;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const FormMessage = styled.div`
  text-align: center;
  font-size: 14px;
  max-width: 450px;
  color: white;
  // color: subscribed ? '#ffb6c1' : 'white',
  margin-top: 28px;
`;

export { FormWrapper, FormTitle, Form, FormMessage };
