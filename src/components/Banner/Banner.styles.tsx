import styled from 'styled-components';

import { WHITE, MOBILE_WIDTH } from '../../constants/index';

const BannerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-height: 10%;
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;
`;

const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 900px;
  color: ${WHITE};
  gap: 50px;

  @media screen and (max-width: ${MOBILE_WIDTH}) {
    flex-direction: column;
    align-content: center;
    align-items: center;
    gap: 0;
  }
`;

const BannerImageWrapper = styled.div`
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: -4px 4px 16px #000000;
  max-height: 500px;

  @media screen and (max-width: ${MOBILE_WIDTH}) {
    margin-right: 0px;
  }
`;

const BannerImage = styled.div`
  border-radius: 8px;
  overflow: hidden;
  &:hover {
    opacity: 0.8;
  }
`;

const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 300px;

  @media screen and (max-width: ${MOBILE_WIDTH}) {
    width: 100%;
    max-width: 500px;
  }
`;

const BannerInfo = styled.div`
  @media screen and (max-width: ${MOBILE_WIDTH}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const BannerTitle = styled.div`
  font-size: 42px;

  @media screen and (max-width: ${MOBILE_WIDTH}) {
    max-width: 70%;
  }
`;

const BannerOutNow = styled.div`
  font-size: 22px;
`;

const BannerButtonWrapper = styled.div`
  margin-top: 8px;
`;

export {
  BannerWrapper,
  Banner,
  BannerImageWrapper,
  BannerImage,
  BannerText,
  BannerInfo,
  BannerTitle,
  BannerOutNow,
  BannerButtonWrapper,
};
