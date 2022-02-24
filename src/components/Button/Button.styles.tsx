import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  button: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 48,
    paddingLeft: 30,
    paddingRight: 30,
    minWidth: 200,
    fontSize: 16,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 4,
    borderStyle: "solid",
    color: "white",
    cursor: "pointer",
    "&:active": {
      opacity: 0.8,
    },
    "&:hover": {
      backgroundColor: "white",
      color: "black",
    },
  },
});

export default useStyles;
