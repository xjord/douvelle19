import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  contact: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: 18,
  },
  contactLink: {
    marginTop: 4,
    fontWeight: "600",
  },
});

export default useStyles;
