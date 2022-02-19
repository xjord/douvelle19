import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  row: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "white",
    borderStyle: "solid",
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 10,
    paddingLeft: 10,
  },
  rowEvent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  rowDate: {},
  rowVenue: {},
  rowLocation: {},
  rowTicket: {},
});

export default useStyles;
