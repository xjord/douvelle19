import styled from 'styled-components';

import { WHITE, MOBILE_WIDTH } from '../../constants/index';

const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${WHITE};
  padding-bottom: 5vh;

  @media screen and (max-width: ${MOBILE_WIDTH}) {
    padding-bottom: 0;
  }
`;

const NavigationHamburger = styled.div`
  position: absolute;
  top: 20px;
  left: 32px;
  height: 24px;
  width: 24px;
  z-index: 1001;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  @media screen and (min-width: ${MOBILE_WIDTH}) {
    display: none;
  }
`;

export { NavigationWrapper, NavigationHamburger };
