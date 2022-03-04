import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  contact: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: 18,
    width: '100%',
    '@media (min-width: 759px)': {
      maxWidth: '60%',
    },
  },
  contactWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 32,
    borderRadius: 8,
    width: '100%',
    marginBottom: 24,
    '@media (max-width: 759px)': {
      flexDirection: 'column',
    },
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 48,
    '@media (max-width: 759px)': {
      height: 'auto',
      textAlign: 'center',
      marginBottom: 12,
    },
  },
  contactTitle: {
    color: '#AEAEAE',
  },
  contactLink: {
    fontWeight: '600',
  },
  contactButtonWrapper: {
    width: '100%',
    maxWidth: 200,
  },
});

export default useStyles;
