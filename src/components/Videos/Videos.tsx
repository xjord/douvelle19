import React from 'react';
import YouTube from 'react-youtube';
import Image from 'next/image';

import useStyles from './Videos.styles';

const Music = (props) => {
  const { videos } = props;

  const link = videos[0].fields.url.content[0].content[0].value;

  const thumbnail = `https://img.youtube.com/vi/${link}/0.jpg`;

  const classes = useStyles();

  return (
    <div className={classes.videos}>
      {/* Map through videos here */}
      <YouTube videoId={link} />
      <Image className={classes.videoThumbnail} height={400} width={640} src={thumbnail} alt={thumbnail} />
      {/* Add play button on hover */}
      {/* Open modal with video in on click of play */}
    </div>
  );
};

export default Music;
