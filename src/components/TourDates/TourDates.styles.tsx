import { createUseStyles } from "react-jss";

const useStyles = (tourDatesLoaded: boolean) => {
  console.log(tourDatesLoaded, "sss");
  return createUseStyles({
    tourDate: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      color: "white",
    },
    tourDateLoading: {
      ...(tourDatesLoaded && {
        display: "none",
      }),
    },
    tourDateWidget: {
      display: tourDatesLoaded ? "auto" : "none",
      width: "100%",
    },
  });
};

export default useStyles;
