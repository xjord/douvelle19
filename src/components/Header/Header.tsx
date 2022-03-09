import React from 'react';
import Image from 'next/image';

import { HeaderWrapper, HeaderLogo } from './Header.styles';

const Header = (props) => {
  const { logo } = props;

  const image = logo?.logo?.fields?.file?.url;

  return (
    <HeaderWrapper>
      <HeaderLogo>
        <Image src={'https:' + image} width={200} height={200} alt={'logo'} />
      </HeaderLogo>
    </HeaderWrapper>
  );
};

export default Header;
