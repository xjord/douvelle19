import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  videos: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  video: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    marginTop: 24,
    cursor: 'pointer',
  },
  videoPlayIconWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 999,
    top: '40%',
    width: 60,
    height: 60,
    borderRadius: '50%',
    borderWidth: 4,
    borderColor: 'white',
    borderStyle: 'solid',
  },
  videoPlayIcon: {
    width: 24,
    height: 24,
  },
  videoThumbnail: {
    borderRadius: 8,
  },
});

export default useStyles;
