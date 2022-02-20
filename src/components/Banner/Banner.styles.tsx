import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  bannerWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  banner: {
    display: "flex",
    justifyContent: "center",
    color: "white",
  },
  bannerImageWrapper: {
    marginRight: 24,
  },
  bannerImage: {
    borderRadius: 4,
    height: "50vmin",
    "&:hover": {
      opacity: 0.8,
    },
  },
  bannerText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
});

export default useStyles;
