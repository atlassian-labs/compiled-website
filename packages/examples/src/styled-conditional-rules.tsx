import { css, styled } from '@compiled/react';

interface Props {
  primary: boolean,
  isBold: boolean,
  width?: number,
  color?: string,
}

export const LozengeObj = styled.span<Props>({
  border: (props) => props.primary ? '3px solid blue' : '3px solid pink',
  color: ({ color }) => color ? color : 'pink',
  fontWeight: (props) => props.isBold ? 700 : undefined,
  width: ({ width }) => width || 'auto',

  padding: '4px 8px',
  borderRadius: 3,
});

export const LozengeStr = styled.span<Props>`
  border: ${({ primary }) => primary ? '3px solid blue' : '3px solid pink'};
  color: ${(props) => props.color ? props.color : 'pink'};

  padding: 4px 8px;
  border-radius: 3px;
`;
