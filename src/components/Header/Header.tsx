import React from 'react';
import Image from 'next/image';

import useStyles from './Header.styles';

const Header = (props) => {
  const { logo } = props;

  const image = logo?.logo?.fields?.file?.url;

  const classes = useStyles();

  return (
    <header className={classes.header}>
      <Image src={'https:' + image} width={200} height={200} className={classes.headerLogo} alt={'logo'} />
    </header>
  );
};

export default Header;
