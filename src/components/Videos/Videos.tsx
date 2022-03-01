import React from 'react';
import YouTube from 'react-youtube';
import Image from 'next/image';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useStyles from './Videos.styles';

const Music = (props) => {
  const { videos } = props;

  const classes = useStyles();

  return (
    <div className={classes.videos}>
      <div>
        {videos.map((video, index) => {
          const videoId = video.fields.videoId;
          const thumbnail = `https://img.youtube.com/vi/${videoId}/0.jpg`;
          return (
            <div key={index} className={classes.video}>
              <div className={classes.videoPlayIconWrapper}>
                {/* onClick={() => openSocial(link)} */}
                <FontAwesomeIcon className={classes.videoPlayIcon} icon={faPlay} />
              </div>
              {/* <YouTube videoId={link} /> */}
              <Image className={classes.videoThumbnail} height={400} width={640} src={thumbnail} alt={thumbnail} />
            </div>
          );
        })}
      </div>
      {/* Open modal with video in on click of play */}
    </div>
  );
};

export default Music;
