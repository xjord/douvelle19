import styled from 'styled-components';

const VideosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const VideosBackground = styled.div`
  display: flex;
  position: fixed;
  opacity: 0.7;
  background-color: #111111;
  top: 0;
  bottom: 0;
  z-index: 998;
  width: 100%;
  height: 100vh;
`;

const Video = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 24px;
`;

const VideoPlayIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 997;
  top: 40%;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border-width: 4px;
  border-color: white;
  borderstyle: solid;

  // boxShadow: {
  //   x: -4,
  //   y: -4,
  //   blur: 16,
  //   color: '#000000',
  // },

  &:hover {
    transform: scale(1.1);
  }
`;

const VideoPlayIcon = styled.div`
  width: 24px;
  height: 24px;
`;

const VideoThumbnail = styled.div`
  border-radius: 8px;
  background-color: black;
  width: 100%;
`;

const VideoModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  width: 100%;
  max-width: 900px;
`;

const VideoCloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 20px;
  cursor: pointer;
`;

const VideoCloseButton = styled.div`
  height: 20px;
  width: 20px;
`;

const VideoModalPlayer = styled.div`
  width: 100%;
  border-width: 4px;
  border-color: white;
  border-style: solid;
  border-radius: 4px;
  background-color: black;
  cursor: pointer;

  // boxShadow: {
  //   x: -4,
  //   y: -4,
  //   blur: 16,
  //   color: '#000000',
  // },
`;

export {
  VideosWrapper,
  VideosBackground,
  Video,
  VideoPlayIconWrapper,
  VideoPlayIcon,
  VideoThumbnail,
  VideoModal,
  VideoCloseWrapper,
  VideoCloseButton,
  VideoModalPlayer,
};
