// import { createUseStyles } from 'react-jss';

const useStyles = ({ subscribed }) =>
  createUseStyles({
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
    formMessage: {
      textAlign: 'center',
      fontSize: 14,
      maxWidth: 450,
      color: subscribed ? '#ffb6c1' : 'white',
      marginTop: 28,
    },
  });

export default useStyles;
