import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  music: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
  },
  musicSpotifyWrapper: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    marginBottom: "5%",
  },
  musicSpotify: {
    width: "50%",
  },
  musicSoundcloudWrapper: {
    display: "flex",
    justifyContent: "center",
  },
  musicSoundcloud: {
    // width: "33%",
  },
});

export default useStyles;
