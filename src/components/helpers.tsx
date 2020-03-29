import { styled } from '@compiled/css-in-js';

export const ScreenReaderText = styled.span`
  position: absolute;
  top: -99999px;
  width: 1;
  height: 1;
  opacity: 0;
  pointer-events: none;
`;
