import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  navigationTabs: {
    display: "flex",
    justifyContent: "space-between",
    color: "white",
    width: 340,
  },
  tab: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Poppins-Regular",
    cursor: "pointer",
    "&:hover": {
      opacity: 0.8,
    },
  },
});

export default useStyles;
