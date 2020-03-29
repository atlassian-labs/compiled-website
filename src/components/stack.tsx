import { styled } from '@compiled/css-in-js';

export const HorizontalStack = styled.div<{ spacing: number }>`
  > * {
    margin-right: ${props => props.spacing}rem;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const VerticalStack = styled.div<{ spacing: number }>`
  && > * {
    margin-bottom: ${props => props.spacing}rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
