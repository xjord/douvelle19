import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  videos: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  videoBackgroundOpacity: {
    position: 'absolute',
    opacity: 0.7,
    backgroundColor: '#111111',
    top: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    zIndex: 998,
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
    zIndex: 997,
    top: '40%',
    width: 60,
    height: 60,
    borderRadius: '50%',
    borderWidth: 4,
    borderColor: 'white',
    borderStyle: 'solid',
    boxShadow: {
      x: -4,
      y: -4,
      blur: 16,
      color: '#000000',
    },
  },
  videoPlayIcon: {
    width: 24,
    height: 24,
  },
  videoThumbnail: {
    borderRadius: 8,
  },
  videoModal: {
    borderRadius: 8,
    position: 'absolute',
    zIndex: 999,
    width: '50%',
    maxWidth: 900,
  },
  videoModalCloseWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    marginBottom: 20,
  },
  videoModalClose: {
    width: 20,
    height: 20,
  },
  videoModalPlayer: {
    width: '100%',
    borderWidth: 4,
    borderColor: 'white',
    borderStyle: 'solid',
    borderRadius: 4,
    backgroundColor: 'black',
    boxShadow: {
      x: -4,
      y: -4,
      blur: 16,
      color: '#000000',
    },
  },
});

export default useStyles;
