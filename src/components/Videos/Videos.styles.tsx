import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  videos: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  videoBackgroundOpacity: {
    position: 'fixed',
    display: 'flex',
    opacity: 0.7,
    backgroundColor: '#111111',
    top: 0,
    bottom: 0,
    zIndex: 998,
    width: '100%',
    height: '100vh',
  },
  video: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    marginTop: 24,
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
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 999,
    width: '100%',
    maxWidth: 900,
  },
  videoModalCloseWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    marginBottom: 20,
    cursor: 'pointer',
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
    cursor: 'pointer',
    boxShadow: {
      x: -4,
      y: -4,
      blur: 16,
      color: '#000000',
    },
  },
});

export default useStyles;
