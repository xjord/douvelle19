import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 50,
    color: 'white',
  },
  tab: {
    marginRight: 24,
    fontFamily: 'Poppins-Regular',
    cursor: 'pointer',
  },
});

export default useStyles;
