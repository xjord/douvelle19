import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  textField: {
    height: 70,
    marginBottom: 32,
    width: '100%',
  },
  textFieldLabel: {
    minHeight: 20,
    marginBottom: 8,
  },
  textFieldInput: {
    width: 500,
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
});

export default useStyles;
