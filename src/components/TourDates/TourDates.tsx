import React, { useEffect, useRef, useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import InnerHTML from 'dangerously-set-html-content';

import { TourDate, TourDateLoading, TourDateWidget } from './TourDates.styles';

const TourDates = (props) => {
  const { songKick } = props;
  const [height, setHeight] = useState(0);
  const [datesLoaded, setDatesLoaded] = useState(false);
  const tourDateRef = useRef();

  const songKickWidget = songKick[0]?.fields?.embeddedCode;

  useEffect(() => {
    tourDateRef.current && setHeight(tourDateRef.current.clientHeight ?? 0);
  }, [tourDateRef]);

  useEffect(() => {
    if (height > 0) {
      setTimeout(() => {
        setDatesLoaded(true);
      }, 500);
    }
  }, [height]);

  return (
    <TourDate ref={tourDateRef}>
      {!datesLoaded ? (
        <TourDateLoading>
          <ClipLoader size={40} color="white" />
        </TourDateLoading>
      ) : (
        <TourDateWidget>
          <InnerHTML html={songKickWidget} />
        </TourDateWidget>
      )}
    </TourDate>
  );
};

export default TourDates;
