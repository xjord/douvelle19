import React from 'react';

import Header from '../Header';
import Socials from '../Socials';
import Navigation from '../Navigation';

import { ChildrenWrapper } from './Layout.styles';

const Layout = (props) => {
  const { children, logo, socials } = props;

  return (
    <>
      <Header logo={logo} />
      {/* <Socials socials={socials} /> */}
      <Navigation data={props} />
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </>
  );
};

export default Layout;
