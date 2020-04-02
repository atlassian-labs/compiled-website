import { styled } from '@compiled/css-in-js';

const AllowIt = styled.h1<{ massive: boolean }>`
  color: ${(props) => (props.massive ? 'red' : 'blue')};
`;
