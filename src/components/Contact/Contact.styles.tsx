import styled from 'styled-components';

const ContactWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  width: 100%;
  max-width: 60%;
  font-size: 18px;

  @media screen and (max-width: 800px) {
    max-width: 100%;
  }
`;

const ContactItem = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: black;
  width: 100%;
  padding: 32px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 24px;

  @media screen and (max-width: 759px) {
    flex-direction: column;
  }
`;

const ContactInfo = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 48px;

  @media screen and (max-width: 759px) {
    height: auto;
    text-align: center;
    margin-bottom: 12px;
  }
`;

const ContactTitle = styled.form`
  color: #aeaeae;
`;

const ContactLink = styled.form`
  font-weight: 600;
`;

const ContactButtonWrapper = styled.form`
  width: 100%;
  max-width: 200px;
`;

export { ContactWrapper, ContactItem, ContactInfo, ContactTitle, ContactLink, ContactButtonWrapper };
