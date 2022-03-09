import styled from 'styled-components';

const MusicWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  width: 100%;
  max-width: 100%;
`;

const MusicSpotifyWrapper = styled.form`
  display: flex;
  align-content: center;
  justify-content: center;
  margin-bottom: 5%;
`;

const MusicSpotify = styled.form`
  width: 50%;
`;

const MusicSoundcloudWrapper = styled.form`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const MusicSoundcloud = styled.form`
  width: 30%;
`;

export { MusicWrapper, MusicSpotifyWrapper, MusicSpotify, MusicSoundcloudWrapper, MusicSoundcloud };
