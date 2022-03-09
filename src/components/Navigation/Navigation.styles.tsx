import styled from 'styled-components';

const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: 'center;
  color: white;
`;

const NavigationHamburger = styled.div`
  position: absolute;
  top: 32px;
  left: 32px;
  height: 24px;
  width: 24px;
  z-index: 1001;
  @media screen and (min-width: 759px) {
    display: none;
  }
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

const NavigationData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  margintop: 10vh;
  @media screen and (max-width: 759px) {
    margin-top: 2vh;
  }
`;

export { NavigationWrapper, NavigationHamburger, NavigationData };
