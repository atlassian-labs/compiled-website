import { styled } from '@compiled/css-in-js';

export const EmphasisText = styled.span<{ massive: boolean }>({
  color: (props) => (props.massive ? '#00B8D9' : '#36B37E'),
  textTransform: 'uppercase',
  fontWeight: 600,
});
