import { createUseStyles } from 'react-jss';

const useStyles = (tourDatesLoaded: boolean) =>
  createUseStyles({
    tourDate: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      color: 'white',
    },
    tourDateLoading: {
      ...(tourDatesLoaded && {
        display: 'none',
      }),
    },
    tourDateWidget: {
      display: tourDatesLoaded ? 'auto' : 'none',
      width: '100%',
      maxWidth: '80%',
    },
  });

export default useStyles;
