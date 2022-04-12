import styled from 'styled-components';

import { WHITE } from '../../constants/index';

const SocialWrapper = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
  display: flex;
  justify-content: center;
  z-index: 9999;
  color: ${WHITE};
`;

const SocialLogo = styled.div`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export { SocialWrapper, SocialLogo };
