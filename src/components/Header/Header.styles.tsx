import styled from 'styled-components';

import { WHITE } from '../../constants/index';

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: (10px + 2vmin);
  color: ${WHITE};
  padding: 50px;
`;

const HeaderLogo = styled.div``;

export { HeaderWrapper, HeaderLogo };
