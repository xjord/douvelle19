import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  row: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "white",
    borderStyle: "solid",
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 10,
    paddingLeft: 10,
  },
  rowColumn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  rowEvent: {
    display: "flex",
    flexDirection: "row",
  },
  rowEventInfo: {
    display: "flex",
    flexDirection: "column",
    marginRight: 24,
  },
  rowEventLocation: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  rowDate: {},
  rowVenue: {},
  rowTicket: {
    display: "flex",
    justifyContent: "flex-end",
  },
});

export default useStyles;
