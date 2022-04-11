import styled from 'styled-components';

import { BLACK, WHITE, GREY, MOBILE_WIDTH } from '../../constants/index';

const ContactWrapper = styled.div`
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

const ContactItem = styled.div`
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

const ContactInfo = styled.div`
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

const ContactTitle = styled.div`
  color: ${GREY};
`;

const ContactLink = styled.div`
  font-weight: 600;
`;

const ContactButtonWrapper = styled.div`
  width: 100%;
  max-width: 200px;
`;

export { ContactWrapper, ContactItem, ContactInfo, ContactTitle, ContactLink, ContactButtonWrapper };
