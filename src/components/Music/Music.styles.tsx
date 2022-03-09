// import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  music: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '80%',
  },
  musicSpotifyWrapper: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    marginBottom: '5%',
  },
  musicSpotify: {
    width: '50%',
  },
  musicSoundcloudWrapper: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
  },
  musicSoundcloud: {
    width: '30%',
  },
});

export default useStyles;
