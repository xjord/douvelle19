import styled from 'styled-components';

const MerchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flew-wrap: wrap;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  padding: 0 10%;

  @media screen and (max-width: 759px) {
    flex-direction: column;
    padding: 0;
  }
`;

const MerchItem = styled.div`
  flex: 1 1 100%;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  padding: 32px;
  margin-right: 24px;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 24px;

  @media screen and (max-width: 759px) {
    margin-right: 0px;
  }
`;

const MerchImage = styled.div`
  width: 100%;
  cursor: pointer;

  &:hover: {
    opacity: 0.8;
  }
`;

const MerchInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 48px;
`;

const MerchLink = styled.div`
  font-weight: 600;
  margin-top: 8px;
  cursor: pointer;

  &:hover: {
    color: #aeaeae;
  }

  @media screen and (max-width: 759px) {
    font-size: 14px;
  }
`;

const MerchOutOfStock = styled.div`
  color: red;
  font-size: 16px;

  @media screen and (max-width: 759px) {
    font-size: 14px;
  }
`;

const MerchPrice = styled.div`
  color: #aeaeae;
  font-size: 16px;

  @media screen and (max-width: 759px) {
    font-size: 14px;
  }
`;

export { MerchWrapper, MerchItem, MerchImage, MerchInfo, MerchLink, MerchOutOfStock, MerchPrice };
