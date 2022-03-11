import styled from 'styled-components';

const TourDate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: column;
  align-items: center;
  width: 100%;
  color: white;
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
  @media screen and (max-width: 759px) {
    max-width: 100%;
  }
`;

export { TourDate, TourDateLoading, TourDateWidget };
