import React from 'react';
import InstagramFeed from 'react-ig-feed';
import 'react-ig-feed/dist/index.css';

import Button from '../Button';
import { openInTab } from '../../utils/helpers';

import { InstagramWrapper, FollowButtonWrapper, FollowButton } from './Photos.styles';

interface PhotoProps {
  followLink?: string;
}

const Photos = ({ followLink }: PhotoProps) => {
  return (
    <InstagramWrapper>
      <InstagramFeed token={process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN} counter="24" />
      {followLink && (
        <FollowButtonWrapper>
          <FollowButton>
            <Button onClick={() => openInTab(followLink)}>Follow</Button>
          </FollowButton>
        </FollowButtonWrapper>
      )}
    </InstagramWrapper>
  );
};

export default Photos;
