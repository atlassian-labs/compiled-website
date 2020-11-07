import { styled } from '@compiled/core';

const RedText = styled.span`
  color: red;
`;

export const BlueText = styled(RedText)`
  color: blue;
`;
