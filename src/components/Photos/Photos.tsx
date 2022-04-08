import React from 'react';
import InstagramFeed from 'react-ig-feed';
import 'react-ig-feed/dist/index.css';

import Button from '../Button';
import { openInTab } from '../../utils/helpers';
import { InstagramWrapper, FollowButtonWrapper, FollowButton } from './Photos.styles';

const Photos = () => {
  return (
    <InstagramWrapper>
      <InstagramFeed token={process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN} counter="24" />
      <FollowButtonWrapper>
        <FollowButton>
          <Button onClick={() => openInTab('https://www.instagram.com/douvelle19/')}>Follow</Button>
        </FollowButton>
      </FollowButtonWrapper>
    </InstagramWrapper>
  );
};

export default Photos;
