import React, { useMemo, useState, useEffect } from 'react';
import Image from 'next/image';
import { faPlay, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
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
} from './Videos.styles';

const Music = ({ videos }) => {
  const [modalVideo, setModalVideo] = useState('');
  const modalOpen = useMemo(() => modalVideo !== '', [modalVideo]);

  useEffect(() => {
    // Disable scrolling if video modal open
    document.body.style.overflow = modalOpen ? 'hidden' : 'auto';
  }, [modalOpen]);

  return (
    <VideosWrapper>
      {modalOpen && <VideosBackground onClick={() => setModalVideo('')} />}
      <div>
        {videos.map((video, index) => {
          const videoId = video.fields.videoId;
          const title = video.fields.title;
          const thumbnail = `https://img.youtube.com/vi/${videoId}/0.jpg`;

          return (
            <VideoWrapper key={index}>
              <VideoTitle>{title}</VideoTitle>
              <Video onClick={() => setModalVideo(videoId)}>
                <VideoPlayIconWrapper>
                  <FontAwesomeIcon height={24} width={24} icon={faPlay} color="white" />
                </VideoPlayIconWrapper>
                <VideoThumbnail>
                  <Image height={400} width={640} src={thumbnail} alt={thumbnail} />
                </VideoThumbnail>
              </Video>
            </VideoWrapper>
          );
        })}
      </div>
      {modalOpen && (
        <VideoModal>
          <VideoCloseWrapper>
            <VideoCloseButton>
              <FontAwesomeIcon icon={faCircleXmark} onClick={() => setModalVideo('')} color="white" />
            </VideoCloseButton>
          </VideoCloseWrapper>
          <VideoModalPlayer>
            <iframe
              width="100%"
              height="506"
              src={`https://www.youtube.com/embed/${modalVideo}?autoplay=1`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </VideoModalPlayer>
        </VideoModal>
      )}
    </VideosWrapper>
  );
};

export default Music;
