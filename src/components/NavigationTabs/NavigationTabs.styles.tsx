import styled from 'styled-components';

import { WHITE, BLACK, PINK, MOBILE_WIDTH } from '../../constants/index';

interface NavigationTabsProps {
  mobileMenuOpen?: boolean;
  isActive?: boolean;
}

const NavigationTabsWrapper = styled.div<NavigationTabsProps>`
  display: flex;
  justify-content: space-between;
  color: ${WHITE};
  width: 100%;
  max-width: 654px;

  @media screen and (max-width: ${MOBILE_WIDTH}) {
    display: ${(p) => (p.$mobileMenuOpen ? 'flex' : 'none')};
    background-color: ${(p) => p.$mobileMenuOpen && BLACK};
    flex-direction: ${(p) => (p.$mobileMenuOpen ? 'column' : 'row')};
    justify-content: ${(p) => (p.$mobileMenuOpen ? 'flex-start' : 'space-between')};
    align-items: ${(p) => p.$mobileMenuOpen && 'center'};
    padding-top: ${(p) => p.$mobileMenuOpen && '20vh'};
    position: ${(p) => p.$mobileMenuOpen && 'absolute'};
    height: ${(p) => p.$mobileMenuOpen && '100%'};
    top: ${(p) => p.$mobileMenuOpen && '0%'};
    z-index: ${(p) => p.$mobileMenuOpen && '1000'};
  }
`;

const NavigationTab = styled.div<NavigationTabsProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-ttems: center;
  cursor: pointer;
  color: ${(p) => (p.$isActive ? PINK : WHITE)};

  @media screen and (max-width: ${MOBILE_WIDTH}) {
    padding: 14px;
  }
  &:hover {
    opacity: 0.8;
  }
`;

export { NavigationTabsWrapper, NavigationTab };
