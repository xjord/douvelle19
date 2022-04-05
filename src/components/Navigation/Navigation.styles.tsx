import styled from 'styled-components';

const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding-bottom: 5vh;
`;

const NavigationHamburger = styled.div`
  position: absolute;
  top: 20px;
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

export { NavigationWrapper, NavigationHamburger };
