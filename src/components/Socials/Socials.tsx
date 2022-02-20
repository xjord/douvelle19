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

import { openInTab } from "../../utils/helpers";
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
  const openSocial = (link: SocialLinks) => openInTab(link);

  const classes = useStyles();

  return (
    <div className={classes.socialWrapper}>
      <FontAwesomeIcon
        className={classes.socialIcon}
        icon={faSpotify}
        onClick={() => openSocial(SocialLinks.Spotify)}
      />
      <FontAwesomeIcon
        className={classes.socialIcon}
        icon={faInstagram}
        onClick={() => openSocial(SocialLinks.Instagram)}
      />
      <FontAwesomeIcon
        className={classes.socialIcon}
        icon={faSoundcloud}
        onClick={() => openSocial(SocialLinks.Soundcloud)}
      />
      <FontAwesomeIcon
        className={classes.socialIcon}
        icon={faTwitter}
        onClick={() => openSocial(SocialLinks.Twitter)}
      />
      <FontAwesomeIcon
        className={classes.socialIcon}
        icon={faYoutube}
        onClick={() => openSocial(SocialLinks.Youtube)}
      />
      <FontAwesomeIcon
        className={classes.socialIcon}
        icon={faFacebook}
        onClick={() => openSocial(SocialLinks.Facebook)}
      />
    </div>
  );
};

export default Socials;
