import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  merch: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 18,
    paddingLeft: '10%',
    paddingRight: '10%',
  },
  merchWrapper: {
    flex: '1 1 100%',
    maxWidth: 380,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 32,
    marginRight: 24,
    borderRadius: 8,
    marginTop: 24,
  },
  merchImage: {
    width: '100%',
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.8,
    },
  },
  merchInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '100%',
    height: 48,
  },
  contactTitle: {
    color: '#AEAEAE',
  },
  merchLink: {
    fontWeight: '600',
    marginTop: 8,
    cursor: 'pointer',
    '&:hover': {
      color: '#AEAEAE',
    },
    '@media (max-width: 759px)': {
      fontSize: 14,
    },
  },
  merchOutOfStock: {
    color: 'red',
    fontSize: 16,
    '@media (max-width: 759px)': {
      fontSize: 14,
    },
  },
  merchPrice: {
    fontSize: 16,
    color: '#AEAEAE',
    '@media (max-width: 759px)': {
      fontSize: 14,
    },
  },
});

export default useStyles;
