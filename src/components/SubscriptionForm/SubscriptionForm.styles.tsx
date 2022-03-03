import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  formWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    width: '100%',
    backgroundColor: 'black',
    borderRadius: 8,
    paddingTop: '3%',
    paddingBottom: '3%',
    paddingLeft: '10%',
    paddingRight: '10%',
  },
  formTitle: {
    width: '100%',
    maxWidth: 500,
    textAlign: 'center',
    marginBottom: '5%',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  formButtonWrapper: {
    marginTop: '10%',
  },
});

export default useStyles;
