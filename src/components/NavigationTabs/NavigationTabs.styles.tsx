import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  navigationTabs: {
    display: "flex",
    justifyContent: "center",
    color: "white",
  },
  tab: {
    marginRight: 24,
    fontFamily: "Poppins-Regular",
    cursor: "pointer",
    "&:hover": {
      opacity: 0.8,
    },
  },
});

export default useStyles;
