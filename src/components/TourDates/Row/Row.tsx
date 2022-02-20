import React from "react";

import { Response } from "../../../models/index";
import { getDateString } from "../../../utils/helpers";
import useStyles from "./Row.styles";

interface RowProps {
  info: Response;
}

const Row = (props: RowProps) => {
  const { info } = props;
  const { date, venue, location, ticketLink } = info?.fields;

  const link = ticketLink?.content[0]?.content[0].value ?? "TBC";

  const classes = useStyles();
  return (
    <div className={classes.row}>
      <div className={classes.rowEvent}>
        <div className={classes.rowEventInfo}>
          {date && <div className={classes.rowDate}>{getDateString(date)}</div>}
          {venue && <div className={classes.rowVenue}>{venue}</div>}
        </div>

        <div className={classes.rowEventLocation}>
          {location !== undefined ? location : "TBC"}
        </div>
      </div>
      <div className={classes.rowColumn}>
        <div className={classes.rowTicket}>{link}</div>
      </div>
    </div>
  );
};

export default Row;
