import styled from 'styled-components';

import { WHITE, MOBILE_WIDTH } from '../../constants/index';

const TourDate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: column;
  align-items: center;
  width: 100%;
  color: ${WHITE};
`;

const TourDateLoading = styled.div`
  display: flex;
  height: 120px;
  flex-direction: row;
  justify-content: column;
  align-items: center;
`;

const TourDateWidget = styled.div`
  display: auto;
  width: 100%;
  max-width: 80%;
  @media screen and (max-width: ${MOBILE_WIDTH}) {
    max-width: 100%;
  }
`;

export { TourDate, TourDateLoading, TourDateWidget };
