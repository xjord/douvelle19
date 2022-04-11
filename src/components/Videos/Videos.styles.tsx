import styled from 'styled-components';

import { BLACK, BLACK_GREY, WHITE } from '../../constants/index';

interface VideoStyleProps {
  hovering?: boolean;
}

const VideosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const VideosBackground = styled.div`
  display: flex;
  position: fixed;
  opacity: 0.7;
  background-color: ${BLACK_GREY};
  top: 0;
  bottom: 0;
  z-index: 998;
  width: 100%;
  height: 100vh;
`;

const VideoWrapper = styled.div`
  max-width: 640px;
`;

const VideoTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  color: ${WHITE};
  width: 100%;
  margin-bottom: 24px;
  font-size: 14px;
  text-align: center;
`;

const Video = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 40px;
`;

const VideoPlayIconWrapper = styled.div<VideoStyleProps>`
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
  border-color: ${WHITE};
  border-style: solid;
  box-shadow: -4px 4px 16px #000000;
  &:hover {
    transform: scale(1.1);
  }
`;

const VideoThumbnail = styled.div`
  border-radius: 8px;
  overflow: hidden;
  background-color: ${BLACK};
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
  border-color: ${WHITE};
  border-style: solid;
  border-radius: 4px;
  background-color: ${BLACK};
  cursor: pointer;
  box-shadow: -4px 4px 16px #000000;
`;

export {
  VideosWrapper,
  VideosBackground,
  VideoWrapper,
  VideoTitle,
  Video,
  VideoPlayIconWrapper,
  VideoThumbnail,
  VideoModal,
  VideoCloseWrapper,
  VideoCloseButton,
  VideoModalPlayer,
};
