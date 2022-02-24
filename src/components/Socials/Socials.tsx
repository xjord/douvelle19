import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faSoundcloud,
  faSpotify,
  faBandcamp,
  faItunes,
} from '@fortawesome/free-brands-svg-icons';

import { openInTab } from '../../utils/helpers';
import useStyles from './Socials.styles';

const Socials = ({ socials }) => {
  const openSocial = (link: string) => openInTab(link);

  const SocialIcons = {
    Spotify: faSpotify,
    Soundcloud: faSoundcloud,
    Facebook: faFacebook,
    Instagram: faInstagram,
    Twitter: faTwitter,
    Youtube: faYoutube,
    Bandcamp: faBandcamp,
    Apple: faItunes,
  };

  const classes = useStyles();

  return (
    <div className={classes.socialWrapper}>
      {socials.reverse().map((social, index) => {
        const link = social?.fields?.link;
        const type = social?.fields?.type;

        return (
          <div key={index} className={classes.socialIcon}>
            <FontAwesomeIcon icon={SocialIcons[type]} onClick={() => openSocial(link)} />
          </div>
        );
      })}
    </div>
  );
};

export default Socials;
