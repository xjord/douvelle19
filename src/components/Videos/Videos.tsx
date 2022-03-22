import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import { faPlay, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  VideosWrapper,
  VideosBackground,
  VideoTitle,
  Video,
  VideoPlayIconWrapper,
  VideoThumbnail,
  VideoModal,
  VideoCloseWrapper,
  VideoCloseButton,
  VideoModalPlayer,
} from './Videos.styles';

const Music = (props) => {
  const { videos } = props;

  const [modalVideo, setModalVideo] = useState('');
  const [hovering, setHovering] = useState(false);
  const modalOpen = useMemo(() => modalVideo !== '', [modalVideo]);

  return (
    <VideosWrapper>
      {modalOpen && <VideosBackground onClick={() => setModalVideo('')} />}
      <div>
        {videos.map((video, index) => {
          const videoId = video.fields.videoId;
          const title = video.fields.title;
          const thumbnail = `https://img.youtube.com/vi/${videoId}/0.jpg`;

          return (
            <div key={index}>
              <VideoTitle>{title}</VideoTitle>
              <Video
                onClick={() => setModalVideo(videoId)}
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
              >
                <VideoPlayIconWrapper $hovering={hovering}>
                  <FontAwesomeIcon height={24} width={24} icon={faPlay} />
                </VideoPlayIconWrapper>
                <VideoThumbnail>
                  <Image height={400} width={640} src={thumbnail} alt={thumbnail} />
                </VideoThumbnail>
              </Video>
            </div>
          );
        })}
      </div>
      {modalOpen && (
        <VideoModal>
          <VideoCloseWrapper>
            <VideoCloseButton>
              <FontAwesomeIcon icon={faCircleXmark} onClick={() => setModalVideo('')} />
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
