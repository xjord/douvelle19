import React from 'react';
import Image from 'next/image';

import { HeaderWrapper, HeaderLogo } from './Header.styles';
import { createClient } from 'contentful';

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const logo = await client.getEntries({
    content_type: 'logo',
  });

  return {
    props: {
      logo: logo.items[0].fields,
    },
  };
};

const Header = (props) => {
  const { logo } = props;

  const image = logo?.logo?.fields?.file?.url;

  return (
    !!logo && (
      <HeaderWrapper>
        <HeaderLogo>
          <Image src={'https:' + image} width={200} height={200} alt={'logo'} />
        </HeaderLogo>
      </HeaderWrapper>
    )
  );
};

export default Header;
