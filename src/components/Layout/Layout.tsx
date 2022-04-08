import React, { useState, useEffect } from 'react';

import Header from '../Header';
import Socials from '../Socials';
import Navigation from '../Navigation';
import { fetchContentfulData } from '../../utils/helpers';
import { ChildrenWrapper } from './Layout.styles';

const Layout = ({ children }) => {
  const [data, setData] = useState<{ logo; socials }>();

  useEffect(() => {
    const res = fetchContentfulData();
    res.then((data) => setData(data));
  }, []);

  const logo = data?.logo?.fields.file.url;
  const socials = data?.socials;

  return (
    <>
      {logo && <Header logo={logo} />}
      <Socials socials={socials} />
      <Navigation />
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </>
  );
};

export default Layout;
