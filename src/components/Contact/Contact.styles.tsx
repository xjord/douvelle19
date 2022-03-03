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
    maxWidth: '60%',
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
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 48,
  },
  contactTitle: {
    color: '#AEAEAE',
  },
  contactLink: {
    fontWeight: '600',
  },
});

export default useStyles;
