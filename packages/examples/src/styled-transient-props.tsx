import { styled } from '@compiled/core';

export const TransientProps = styled.span<{ $color: string; color: string }>`
  color: ${(props) => props.$color};
  background-color: ${(props) => props.color};
`;
