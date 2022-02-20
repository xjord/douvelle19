import React from "react";

import useStyles from "./Banner.styles";

const Home = () => {
  const classes = useStyles();

  //TODO: Switch out static data for cms content

  return (
    <div className={classes.bannerWrapper}>
      <div className={classes.banner}>
        <div className={classes.bannerImageWrapper}>
          <img className={classes.bannerImage} src={"/EP.png"} />
        </div>
        <div className={classes.bannerText}>
          <div>{'"D19" is out now'}</div>
          <div>Stream/Purchase here</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
