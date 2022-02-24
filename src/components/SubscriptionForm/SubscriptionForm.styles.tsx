import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  formWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    width: "100%",
  },
  formTitle: {
    marginBottom: "5%",
  },
  form: {},
  formButtonWrapper: {
    marginTop: "5%",
  },
});

export default useStyles;
