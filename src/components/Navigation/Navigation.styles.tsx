import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  navigation: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    paddingLeft: '10%',
    paddingRight: '10%',
  },
  navigationHamburger: {
    position: 'absolute',
    top: 32,
    left: 32,
    height: 24,
    width: 24,
    zIndex: 1001,
    '&:hover': {
      opacity: 0.8,
      cursor: 'pointer',
    },
    '@media (min-width: 759px)': {
      display: 'none',
    },
  },
  navigationData: {
    width: '100%',
    height: '100%',
    marginTop: '5vh',
  },
});

export default useStyles;
