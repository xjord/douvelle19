import React from "react";

import Socials from "../Socials";
import useStyles from "./Header.styles";

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <Socials />
      <img src={"/d19.png"} className={classes.headerLogo} />
    </header>
  );
};

export default Header;
