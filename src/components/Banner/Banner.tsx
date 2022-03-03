import React from 'react';
import Image from 'next/image';

import { openInTab } from '../../utils/helpers';
import Button from '../Button';
import useStyles from './Banner.styles';

const Home = ({ banner }) => {
  const releaseTitle = banner?.releaseTitle;
  const releaseLink = banner?.link?.content[0]?.content[0]?.value;
  const releaseImage = banner?.bannerImage?.fields?.file?.url;

  const classes = useStyles();

  return (
    <div className={classes.bannerWrapper}>
      <div className={classes.banner}>
        <div className={classes.bannerImageWrapper}>
          <Image
            className={classes.bannerImage}
            height={500}
            width={500}
            src={'https:' + releaseImage}
            alt={releaseTitle}
            onClick={() => openInTab(releaseLink)}
          />
        </div>
        <div className={classes.bannerText}>
          <div className={classes.bannerInfo}>
            <div className={classes.bannerTitle}>{releaseTitle}</div>
            <div className={classes.bannerOutNow}>OUT NOW</div>
          </div>
          <div className={classes.bannerButtonWrapper}>
            <Button onClick={() => openInTab(releaseLink)}>Stream/Purchase</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
