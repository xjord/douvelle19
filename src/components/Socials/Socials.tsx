import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faSoundcloud,
  faSpotify,
} from '@fortawesome/free-brands-svg-icons';

import useStyles from './Socials.styles';

const Socials = () => {
  const classes = useStyles();

  return (
    <div className={classes.socialWrapper}>
      <FontAwesomeIcon className={classes.socialIcon} icon={faSpotify} />
      <FontAwesomeIcon className={classes.socialIcon} icon={faInstagram} />
      <FontAwesomeIcon className={classes.socialIcon} icon={faSoundcloud} />
      <FontAwesomeIcon className={classes.socialIcon} icon={faTwitter} />
      <FontAwesomeIcon className={classes.socialIcon} icon={faYoutube} />
      <FontAwesomeIcon className={classes.socialIcon} icon={faFacebook} />
    </div>
  );
};

export default Socials;
