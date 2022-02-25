import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  contact: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: 18,
    paddingLeft: '20%',
    paddingRight: '20%',
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
  contactTitle: {
    color: '#AEAEAE',
    marginBottom: 8,
  },
  contactLink: {
    marginTop: 4,
    fontWeight: '600',
  },
});

export default useStyles;
