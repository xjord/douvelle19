import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  bannerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  banner: {
    display: 'flex',
    justifyContent: 'center',
    color: 'white',
    '@media (max-width: 759px)': {
      flexDirection: 'column',
      alignContent: 'center',
      alignItems: 'center',
    },
  },
  bannerImageWrapper: {
    marginRight: 100,
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
