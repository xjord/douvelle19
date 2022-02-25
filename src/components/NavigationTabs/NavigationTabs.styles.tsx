import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  navigationTabs: {
    display: 'flex',
    justifyContent: 'space-between',
    color: 'white',
    width: '100%',
    paddingLeft: '30%',
    paddingRight: '30%',
  },
  tab: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.8,
    },
  },
});

export default useStyles;
