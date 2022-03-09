import React, { useEffect, useRef, useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import InnerHTML from 'dangerously-set-html-content';

import { TourDate, TourDateLoading, TourDateWidget } from './TourDates.styles';

const TourDates = () => {
  const [height, setHeight] = useState(0);
  const tourDateRef = useRef();

  const songKickWidget = `<a href="https://www.songkick.com/artists/10110895" class="songkick-widget" data-theme="dark" data-track-button="on" data-detect-style="true" data-font-color="#ffffff" data-background-color="transparent" data-locale="en">Douvelle19 Tour Dates</a> <script src="//widget.songkick.com/10110895/widget.js"></script>`;

  useEffect(() => {
    tourDateRef.current && setHeight(tourDateRef.current.clientHeight ?? 0);
  }, [tourDateRef]);

  // const tourDatesLoaded = height > 0;

  const tourDatesLoaded = true;

  return (
    <TourDate ref={tourDateRef}>
      <TourDateLoading>
        <ClipLoader size={40} color="white" />
      </TourDateLoading>
      <TourDateWidget>
        <InnerHTML html={songKickWidget} />
      </TourDateWidget>
    </TourDate>
  );
};

export default TourDates;
