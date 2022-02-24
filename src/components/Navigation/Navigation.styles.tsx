import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  navigation: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    paddingLeft: "10%",
    paddingRight: "10%",
  },
  navigationData: {
    width: "100%",
    height: "100%",
    marginTop: 70,
  },
});

export default useStyles;
