import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  videos: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  videoThumbnail: {
    borderRadius: 8,
  },
});

export default useStyles;
