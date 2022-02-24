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
    cursor: "pointer",
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
  bannerButtonWrapper: {
    marginTop: 8,
  },
});

export default useStyles;
