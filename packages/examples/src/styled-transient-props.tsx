import styled from '@emotion/styled';

export const TransientProps = styled.span<{ $color: string; color: string }>`
  color: ${(props) => props.$color};
  background-color: ${(props) => props.color};
`;
