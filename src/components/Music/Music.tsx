import React from 'react';
import InnerHTML from 'dangerously-set-html-content';

import {
  MusicWrapper,
  MusicSpotifyWrapper,
  MusicSpotify,
  MusicSoundcloudWrapper,
  MusicSoundcloud,
} from './Music.styles';

const Music = () => {
  //TODO: Remove placeholders for contentful content
  const spotify = [
    `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/0yBUPNDd4cXVZ41C5BPS6d?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
  ];

  const soundcloud = [
    `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1039025494&color=%23a4a4a4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/douvelle19" title="DOUVELLE19" target="_blank" style="color: #cccccc; text-decoration: none;">DOUVELLE19</a> · <a href="https://soundcloud.com/douvelle19/sets/edits-vol2" title="edits vol.2" target="_blank" style="color: #cccccc; text-decoration: none;">edits vol.2</a></div>`,
    `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/866817386&color=%239a9a9a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/douvelle19" title="DOUVELLE19" target="_blank" style="color: #cccccc; text-decoration: none;">DOUVELLE19</a> · <a href="https://soundcloud.com/douvelle19/sets/edits-vol1" title="edits vol.1" target="_blank" style="color: #cccccc; text-decoration: none;">edits vol.1</a></div>`,
    `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1386132868&color=%23a4a4a4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/douvelle19" title="DOUVELLE19" target="_blank" style="color: #cccccc; text-decoration: none;">DOUVELLE19</a> · <a href="https://soundcloud.com/douvelle19/sets/edits-vol-3" title="edits vol.3 (out now on bandcamp)" target="_blank" style="color: #cccccc; text-decoration: none;">edits vol.3 (out now on bandcamp)</a></div>`,
  ];

  return (
    <MusicWrapper>
      <MusicSpotifyWrapper>
        {spotify.map((html) => (
          <MusicSpotify>
            <InnerHTML html={html} />
          </MusicSpotify>
        ))}
      </MusicSpotifyWrapper>

      <MusicSoundcloudWrapper>
        {soundcloud.map((html) => (
          <MusicSoundcloud>
            <InnerHTML html={html} />
          </MusicSoundcloud>
        ))}
      </MusicSoundcloudWrapper>
    </MusicWrapper>
  );
};

export default Music;
