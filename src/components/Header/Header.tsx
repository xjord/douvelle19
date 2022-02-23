import React from "react";
import Image from "next/image";

import useStyles from "./Header.styles";

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <Image
        src={"/d19.png"}
        width={200}
        height={200}
        className={classes.headerLogo}
        alt={"logo"}
      />
    </header>
  );
};

export default Header;
