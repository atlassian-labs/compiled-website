import { styled } from '@compiled/react';

export const EmphasisText = styled.span<{ primary: boolean }>`
  color: ${(props) => (props.primary ? '#00B8D9' : '#36B37E')};
  text-transform: uppercase;
  font-weight: 600;
`;
