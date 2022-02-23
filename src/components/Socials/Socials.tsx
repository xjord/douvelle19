import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faSoundcloud,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";

import { openLink } from "../../utils/helpers";
import useStyles from "./Socials.styles";

enum SocialLinks {
  Spotify = "https://open.spotify.com/artist/3EjNHY8UswIZAxMjqXewVH",
  Soundcloud = "https://soundcloud.com/douvelle19",
  Facebook = "https://www.facebook.com/douvelle19/",
  Instagram = "https://www.instagram.com/douvelle19/?hl=en",
  Twitter = "https://twitter.com/DOUVELLE19",
  Youtube = "https://www.youtube.com/c/Douvelle19",
}

const Socials = () => {
  const openSocial = (link: SocialLinks) => openLink(link);

  const classes = useStyles();

  return (
    <div className={classes.socialWrapper}>
      <div className={classes.socialIcon}>
        <FontAwesomeIcon
          icon={faSpotify}
          onClick={() => openSocial(SocialLinks.Spotify)}
        />
      </div>
      <div className={classes.socialIcon}>
        <FontAwesomeIcon
          icon={faInstagram}
          onClick={() => openSocial(SocialLinks.Instagram)}
        />
      </div>
      <div className={classes.socialIcon}>
        <FontAwesomeIcon
          icon={faSoundcloud}
          onClick={() => openSocial(SocialLinks.Soundcloud)}
        />
      </div>
      <div className={classes.socialIcon}>
        <FontAwesomeIcon
          icon={faTwitter}
          onClick={() => openSocial(SocialLinks.Twitter)}
        />
      </div>
      <div className={classes.socialIcon}>
        <FontAwesomeIcon
          icon={faYoutube}
          onClick={() => openSocial(SocialLinks.Youtube)}
        />
      </div>
      <div className={classes.socialIcon}>
        <FontAwesomeIcon
          icon={faFacebook}
          onClick={() => openSocial(SocialLinks.Facebook)}
        />
      </div>
    </div>
  );
};

export default Socials;
