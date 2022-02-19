import React from "react";
import { getDateString } from "../../../utils/helpers";
import useStyles from "./Row.styles";

interface RowProps {
  info: any[];
}

const Row = (props: RowProps) => {
  const { info } = props;
  const { date, venue, location, ticketLink } = info?.fields;

  const link = ticketLink.content[0].content[0].value;

  const classes = useStyles();
  return (
    <div className={classes.row}>
      <div className={classes.rowEvent}>
        <div className={classes.rowDate}>{getDateString(date)}</div>
        <div className={classes.rowVenue}>{venue}</div>
      </div>
      <div>
        <div className={classes.rowLocation}>{location}</div>
      </div>
      <div>
        <div className={classes.rowTicket}>{link}</div>
      </div>
    </div>
  );
};

export default Row;
