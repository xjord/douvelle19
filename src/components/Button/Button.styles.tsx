import { createUseStyles } from 'react-jss';

const useStyles = ({ width, disabled }) =>
  createUseStyles({
    button: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: 48,
      paddingLeft: 30,
      paddingRight: 30,
      width: width ?? '100%',
      fontSize: 16,
      fontWeight: '500',
      borderRadius: 4,
      backgroundColor: !disabled ? 'white' : 'rgba(255, 255, 255, 0.5)',
      color: 'black',
      cursor: 'pointer',
      '&:active': {
        opacity: 0.8,
      },
    },
  });

export default useStyles;
