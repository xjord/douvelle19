import styled from 'styled-components';

const BannerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;
`;

const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
  color: white;

  @media screen and (max-width: 759px) {
    flex-direction: column;
    align-content: center;
    align-items: center;
  }
`;

const BannerImageWrapper = styled.div`
  cursor: pointer;
  border-radius: 8px;
  box-shadow: -4px 4px 16px #000000;

  @media screen and (max-width: 759px) {
    margin-right: 0px;
  }
`;

const BannerImage = styled.div`
  border-radius: 8px;
  &:hover {
    opacity: 0.8;
  }
`;

const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 759px) {
    width: 100%;
  }
`;

const BannerInfo = styled.div`
  @media screen and (max-width: 759px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const BannerTitle = styled.div`
  font-size: 42px;
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
