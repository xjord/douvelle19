import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 10 + '2vmin',
    color: 'white',
  },
  headerLogo: {
    height: '20vmin',
  },
});

export default useStyles;
