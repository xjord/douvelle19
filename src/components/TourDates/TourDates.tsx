import React from "react";
import InnerHTML from "dangerously-set-html-content";

import useStyles from "./TourDates.styles";

const TourDates = () => {
  const classes = useStyles();

  const songKickWidget = `<a href="https://www.songkick.com/artists/10110895" class="songkick-widget" data-theme="dark" data-track-button="on" data-detect-style="true" data-font-color="#ffffff" data-background-color="transparent" data-locale="en">Douvelle19 Tour Dates</a> <script src="//widget.songkick.com/10110895/widget.js"></script>`;

  return (
    <div className={classes.tourDate}>
      <InnerHTML html={songKickWidget} />
    </div>
  );
};

export default TourDates;
