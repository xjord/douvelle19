import styled from 'styled-components';

import { BLACK_GREY } from '../../constants/index';

const InstagramWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-right: 5%;
  padding-left: 5%;
  color: ${BLACK_GREY};
`;

const FollowButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flew-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 48px;
`;

const FollowButton = styled.div`
  width: 100px;
`;

export { InstagramWrapper, FollowButtonWrapper, FollowButton };
