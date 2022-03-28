import React from 'react';
import InnerHTML from 'dangerously-set-html-content';

import { openInTab } from '../../utils/helpers';
import {
  MusicWrapper,
  MusicTitleWrapper,
  MusicTitle,
  MusicBuyButton,
  MusicSpotifyWrapper,
  MusicSpotify,
  MusicSoundcloudWrapper,
  MusicSoundcloud,
} from './Music.styles';

interface MusicProps {
  music: any;
}

const Music = (props: MusicProps) => {
  const { music } = props;

  const spotify = music.filter((player) => player.fields.type === 'Spotify');
  const soundcloud = music
    .filter((player) => player.fields.type === 'Soundcloud')
    .sort((a, b) => a.fields?.priorityOrder - b.fields?.priorityOrder);

  return (
    <MusicWrapper>
      <MusicSpotifyWrapper>
        {spotify.map((player, index) => {
          const html = player.fields?.embedCode;
          const title = player.fields?.title;
          const buyNowLink = player.fields?.buyLink;

          return (
            <div key={index}>
              <MusicTitleWrapper>
                <MusicTitle>{title}</MusicTitle>
                {buyNowLink && (
                  <>
                    -
                    <MusicBuyButton>
                      <div onClick={() => openInTab(buyNowLink)}>Buy Now</div>
                    </MusicBuyButton>
                  </>
                )}
              </MusicTitleWrapper>
              <MusicSpotify>
                <InnerHTML html={html} />
              </MusicSpotify>
            </div>
          );
        })}
      </MusicSpotifyWrapper>

      <MusicSoundcloudWrapper>
        {soundcloud.map((player, index) => {
          const html = player.fields?.embedCode;
          const title = player.fields?.title;
          const buyNowLink = player.fields?.buyLink;

          return (
            <div key={index}>
              <MusicTitleWrapper>
                <MusicTitle>{title}</MusicTitle>
                {buyNowLink && (
                  <>
                    -
                    <MusicBuyButton>
                      <div onClick={() => openInTab(buyNowLink)}>Buy Now</div>
                    </MusicBuyButton>
                  </>
                )}
              </MusicTitleWrapper>
              <MusicSoundcloud>
                <InnerHTML html={html} />
              </MusicSoundcloud>
            </div>
          );
        })}
      </MusicSoundcloudWrapper>
    </MusicWrapper>
  );
};

export default Music;
