import styled from 'styled-components';

import { BLACK, WHITE, GREY, MOBILE_WIDTH } from '../../constants/index';

const ContactWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${WHITE};
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
  background-color: ${BLACK};
  width: 100%;
  padding: 32px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 24px;

  @media screen and (max-width: ${MOBILE_WIDTH}) {
    flex-direction: column;
  }
`;

const ContactInfo = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 48px;

  @media screen and (max-width: ${MOBILE_WIDTH}) {
    height: auto;
    text-align: center;
    margin-bottom: 12px;
  }
`;

const ContactTitle = styled.form`
  color: ${GREY};
`;

const ContactLink = styled.form`
  font-weight: 600;
`;

const ContactButtonWrapper = styled.form`
  width: 100%;
  max-width: 200px;
`;

export { ContactWrapper, ContactItem, ContactInfo, ContactTitle, ContactLink, ContactButtonWrapper };
