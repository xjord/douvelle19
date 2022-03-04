import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  bannerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  banner: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 800,
    color: 'white',
    '@media (max-width: 759px)': {
      flexDirection: 'column',
      alignContent: 'center',
      alignItems: 'center',
    },
  },
  bannerImageWrapper: {
    cursor: 'pointer',
    borderRadius: 8,
    boxShadow: {
      x: -4,
      y: -4,
      blur: 16,
      color: '#000000',
    },
    '@media (max-width: 759px)': {
      marginRight: 0,
    },
  },
  bannerImage: {
    borderRadius: 8,
    height: '50vmin',
    '&:hover': {
      opacity: 0.8,
    },
  },
  bannerTitle: {
    fontSize: 42,
  },
  bannerText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '@media (max-width: 759px)': {
      width: '100%',
    },
  },
  bannerInfo: {
    '@media (max-width: 759px)': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  },
  bannerOutNow: {
    fontSize: 22,
  },
  bannerButtonWrapper: {
    marginTop: 8,
  },
});

export default useStyles;
