import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  socialWrapper: {
    position: 'absolute',
    top: 17,
    right: 24,
    display: 'flex',
    justifyContent: 'center',
    // backgroundColor: 'pink',
  },
  socialIcon: {
    width: 16,
    height: 16,
    marginRight: 8,
    fontFamily: 'Poppins-Regular',
  },
});

export default useStyles;
