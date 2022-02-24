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
  contactInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10%",
  },
  contactLink: {
    marginTop: 4,
    fontWeight: "600",
    cursor: "pointer",
    "&:hover": {
      color: "#db0035",
    },
  },
});

export default useStyles;
