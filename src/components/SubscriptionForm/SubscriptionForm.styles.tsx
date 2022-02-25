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
  },
  formTitle: {
    textAlign: 'center',
    width: '50%',
    marginBottom: '5%',
  },
  form: {},
  formButtonWrapper: {
    marginTop: '5%',
  },
});

export default useStyles;
