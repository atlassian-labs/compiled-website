/** @jsx jsx */
import { styled, jsx } from '@compiled/css-in-js';
import { ScreenReaderText } from './helpers';

const height = '10rem';

const StyledHeader = styled.header`
  height: ${height};
  display: flex;
  align-items: center;
  padding: 0 3rem;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  max-width: 140rem;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
`;

export const HeaderSpacing = styled.div`
  height: ${height};
`;

const Logo = styled.span`
  font-size: 4rem;
  font-family: 'Charlie Display';
`;

interface HeaderProps {
  children: React.ReactNode;
}

export const Header = ({ children, ...props }: HeaderProps) => (
  <StyledHeader {...props}>
    <a href="/" css={{ textDecoration: 'none', color: 'currentColor' }}>
      <Logo aria-hidden="true">👷‍♀ Compiled</Logo>
    </a>
    <ScreenReaderText aria-label="Compiled see ess ess in jay ess">
      Compiled Css in js
    </ScreenReaderText>
    {children}
  </StyledHeader>
);
