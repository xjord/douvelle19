// import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  textField: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 90,
    marginBottom: 32,
    width: '100%',
    maxWidth: 500,
  },
  textFieldLabel: {
    width: '100%',
    textAlign: 'left',
    minHeight: 20,
    marginBottom: 8,
  },
  textFieldInput: {
    width: '100%',
    backgroundColor: '#373737',
    color: '#AEAEAE',
    borderRadius: 4,
    fontSize: 16,
    borderWidth: 0,
    padding: 16,
    height: 48,
    '&:focus': {
      outline: 'none',
    },
  },
  textFieldErrorMessage: {
    fontSize: 14,
    marginTop: 8,
    minHeight: 24,
    width: '100%',
    textAlign: 'left',
    color: '#ffb6c1',
  },
});

export default useStyles;
