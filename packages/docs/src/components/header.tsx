import { styled } from '@compiled/css-in-js';

const StyledHeader = styled.header``;

export const Header = () => {
  return (
    <StyledHeader css={{ color: 'blue' }}>
      yo <nav aria-label="main"></nav>
    </StyledHeader>
  );
};
