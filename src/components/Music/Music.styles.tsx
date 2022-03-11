import styled from 'styled-components';

const MusicWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 100%;
`;

const MusicTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  color: white;
  width: 100%;
  margin-bottom: 24px;
  font-size: 14px;
`;

const MusicSpotifyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  width: 100%;
  max-width: 800px;
`;

const MusicSpotify = styled.div`
  width: 100%;
  margin-bottom: 40px;
`;

const MusicSoundcloudWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  width: 100%;
  max-width: 800px;
`;

const MusicSoundcloud = styled.div`
  width: 100%;
  margin-bottom: 40px;
`;

export { MusicWrapper, MusicTitle, MusicSpotifyWrapper, MusicSpotify, MusicSoundcloudWrapper, MusicSoundcloud };
