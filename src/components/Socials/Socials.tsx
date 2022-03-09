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
import { SocialWrapper, SocialLogo } from './Socials.styles';

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

  return (
    <SocialWrapper>
      {socials.reverse().map((social, index) => {
        const link = social?.fields?.link;
        const type = social?.fields?.type;
        const icon = SocialIcons[type];

        return (
          <SocialLogo key={`${index}-${social}`}>
            <FontAwesomeIcon icon={icon} onClick={() => openSocial(link)} />
          </SocialLogo>
        );
      })}
    </SocialWrapper>
  );
};

export default Socials;
