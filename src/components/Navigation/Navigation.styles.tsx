import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  navigation: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  navigationData: {
    marginTop: 100,
  },
});

export default useStyles;
