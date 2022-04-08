import React from 'react';
import Image from 'next/image';
import InnerHTML from 'dangerously-set-html-content';

import { TourDate, TourDateWidget } from './TourDates.styles';

const TourDates = ({ songKick }) => {
  const songKickWidget = songKick[0]?.fields?.embeddedCode;

  return (
    <TourDate>
      <TourDateWidget>
        <InnerHTML html={songKickWidget} />
      </TourDateWidget>
      <Image height={300} width={300} src="/locally-sauced.png" alt={'locally-sauced'} />
    </TourDate>
  );
};

export default TourDates;
