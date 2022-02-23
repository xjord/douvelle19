import React from "react";
import Image from "next/image";

import { openLink } from "../../utils/helpers";
import useStyles from "./Banner.styles";

const Home = ({ banner }) => {
  const classes = useStyles();

  const releaseTitle = banner?.fields?.releaseTitle;
  const releaseLink = banner?.fields?.link?.content[0]?.content[0]?.value;
  const releaseImage = banner?.fields?.file?.fileName;

  return (
    <div className={classes.bannerWrapper}>
      <div className={classes.banner}>
        <div className={classes.bannerImageWrapper}>
          <Image
            className={classes.bannerImage}
            height={500}
            width={500}
            src={"/EP.png"}
            alt={releaseTitle}
          />
        </div>
        <div className={classes.bannerText}>
          <div>{`"${releaseTitle} is out now`}</div>
          <div onClick={() => openLink(releaseLink)}>Stream/Purchase here</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
