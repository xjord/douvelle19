import React from 'react';
import InnerHTML from 'dangerously-set-html-content';

import { TourDate, TourDateWidget } from './TourDates.styles';

const TourDates = ({ songKick }) => {
  const songKickWidget = songKick[0]?.fields?.embeddedCode;

  return (
    <TourDate>
      <TourDateWidget>
        <InnerHTML html={songKickWidget} />
      </TourDateWidget>
    </TourDate>
  );
};

export default TourDates;
