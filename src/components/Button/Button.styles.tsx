import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  button: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    paddingLeft: 30,
    paddingRight: 30,
    width: '100%',
    fontSize: 16,
    fontWeight: '500',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 4,
    borderStyle: 'solid',
    backgroundColor: 'white',
    color: 'black',
    cursor: 'pointer',
    '&:active': {
      opacity: 0.8,
    },
  },
});

export default useStyles;
