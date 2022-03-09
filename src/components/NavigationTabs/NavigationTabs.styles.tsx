import styled from 'styled-components';

const NavigationTabsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  width: 100%;
  max-width: 654px;

  @media screen and (max-width: 759px) {
    // display: props.mobileMenuOpen ? 'flex' : 'none',
    // background-color: pink;
    // // ...(props.mobileMenuOpen ? {
    // // display: 'flex',
    // backgroundColor: 'black',
    // flexDirection: 'column',
    // justifyContent: 'flex-start',
    // paddingTop: '20vh',
    // position: 'absolute',
    // height: '100%',
    // top: 0,
    // zIndex: 1000,
  }
`;

const NavigationTab = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-ttems: center;
  cursor: pointer;

  @media screen and (max-width: 759px) {
    padding: 14px;
  }
  &:hover {
    opacity: 0.8;
  }
`;

export { NavigationTabsWrapper, NavigationTab };
