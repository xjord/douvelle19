import React from 'react';
import InnerHTML from 'dangerously-set-html-content';

import {
  MusicWrapper,
  MusicTitle,
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
          const html = player.fields.embedCode;
          const title = player.fields.title;
          return (
            <>
              <MusicTitle>{title}</MusicTitle>
              <MusicSpotify key={index}>
                <InnerHTML html={html} />
              </MusicSpotify>
            </>
          );
        })}
      </MusicSpotifyWrapper>

      <MusicSoundcloudWrapper>
        {soundcloud.map((player, index) => {
          const html = player.fields.embedCode;
          const title = player.fields.title;
          return (
            <>
              <MusicTitle>{title}</MusicTitle>
              <MusicSoundcloud key={index}>
                <InnerHTML html={html} />
              </MusicSoundcloud>
            </>
          );
        })}
      </MusicSoundcloudWrapper>
    </MusicWrapper>
  );
};

export default Music;
