import React from 'react';
import InstagramFeed from 'react-ig-feed';
import 'react-ig-feed/dist/index.css';

import Button from '../Button';
import { openInTab } from '../../utils/helpers';
import { InstagramWrapper, FollowButtonWrapper, FollowButton } from './Photos.styles';

const Photos = () => {
  return (
    <InstagramWrapper>
      <InstagramFeed
        token="IGQVJYT1NsLTN0b3dtbl9teGdYTUtOWEVyTHQ1YWlwcmw5VXpsOWJsRzBaSHc5RllMYXh4OTE5dldOdU9vSV9kejFONFh6RlgtSzk0UXAyVTMyd1FRR0E2eF94VnBiTEZAvejk5ZAU85LVpRbERJaWYzdQZDZD"
        counter="24"
      />
      <FollowButtonWrapper>
        <FollowButton>
          <Button onClick={() => openInTab('https://www.instagram.com/douvelle19/')}>Follow</Button>
        </FollowButton>
      </FollowButtonWrapper>
    </InstagramWrapper>
  );
};

export default Photos;
