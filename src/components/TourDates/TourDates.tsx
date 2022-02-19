import React from "react";

import { Response } from "../../models/index";
import Row from "./Row";
import useStyles from "./TourDates.styles";

interface TourDatesProps {
  dates: Response[];
}

const TourDates = (props: TourDatesProps) => {
  const { dates } = props;

  const classes = useStyles();

  return (
    <div className={classes.tourDate}>
      {dates?.map((date) => (
        <Row key={date.sys.id} info={date} />
      ))}
    </div>
  );
};

export default TourDates;
