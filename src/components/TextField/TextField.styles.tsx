import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  textField: {
    height: 70,
    marginBottom: 32,
    width: "100%",
  },
  textFieldLabel: {
    minHeight: 20,
    marginBottom: 8,
  },
  textFieldInput: {
    width: 500,
    backgroundColor: "#EFF2FC",
    borderColor: "white",
    color: "#0A1D2C",
    borderRadius: 4,
    fontSize: 16,
    borderWidth: 2,
    padding: 16,
    height: 48,
    // boxShadow: "none !important",
    "&:focus": {
      outline: "none",
    },
  },
});

export default useStyles;
