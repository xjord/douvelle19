import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  socialWrapper: {
    position: "absolute",
    top: 17,
    right: 24,
    display: "flex",
    justifyContent: "center",
  },
  socialIcon: {
    width: 16,
    height: 16,
    marginRight: 8,
    "&:hover": {
      opacity: 0.8,
    },
  },
});

export default useStyles;
