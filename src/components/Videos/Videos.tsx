import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import { faPlay, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useStyles from './Videos.styles';

const Music = (props) => {
  const { videos } = props;

  const [modalVideo, setModalVideo] = useState('');
  const modalOpen = useMemo(() => modalVideo !== '', [modalVideo]);

  const classes = useStyles();

  return (
    <div className={classes.videos}>
      {modalOpen && <div className={classes.videoBackgroundOpacity} onClick={() => setModalVideo('')}></div>}
      <div>
        {videos.map((video, index) => {
          const videoId = video.fields.videoId;
          const thumbnail = `https://img.youtube.com/vi/${videoId}/0.jpg`;

          return (
            <div key={index} className={classes.video} onClick={() => setModalVideo(videoId)}>
              <div className={classes.videoPlayIconWrapper}>
                <FontAwesomeIcon className={classes.videoPlayIcon} icon={faPlay} />
              </div>
              <Image className={classes.videoThumbnail} height={400} width={640} src={thumbnail} alt={thumbnail} />
            </div>
          );
        })}
      </div>
      {modalOpen && (
        <div className={classes.videoModal}>
          <div className={classes.videoModalCloseWrapper}>
            <FontAwesomeIcon
              className={classes.videoModalClose}
              icon={faCircleXmark}
              onClick={() => setModalVideo('')}
            />
          </div>
          <div className={classes.videoModalPlayer}>
            <iframe
              width="100%"
              height="506"
              src={`https://www.youtube.com/embed/${modalVideo}`}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Music;
