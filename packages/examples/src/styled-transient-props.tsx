import { styled } from '@compiled/css-in-js';

export const TransientProps = styled.span<{ $color: string; color: string }>`
  color: ${(props) => props.$color};
  background-color: ${(props) => props.color};
`;
