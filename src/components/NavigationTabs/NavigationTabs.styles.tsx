import { createUseStyles } from 'react-jss';

const useStyles = (props) =>
  createUseStyles({
    navigationTabs: {
      display: 'flex',
      justifyContent: 'space-between',
      color: 'white',
      width: '100%',
      paddingLeft: '30%',
      paddingRight: '30%',
      '@media (max-width: 759px)': {
        display: 'none',
        ...(props.mobileMenuOpen && {
          display: 'flex',
          backgroundColor: 'black',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          paddingTop: '20vh',
          position: 'absolute',
          height: '100%',
          top: 0,
          zIndex: 1000,
        }),
      },
    },
    tab: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      '@media (max-width: 759px)': {
        padding: 14,
      },
      '&:hover': {
        opacity: 0.8,
      },
    },
  });

export default useStyles;
