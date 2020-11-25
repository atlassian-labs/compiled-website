/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { ScreenReaderText } from './helpers';

const height = '9rem';

const StyledHeader = styled.header<{
  color: string;
  variant: 'default' | 'invert';
}>`
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
  border-bottom: 1px solid
    ${(props) =>
      props.variant === 'default' ? 'rgba(135, 119, 217, 0.2)' : 'transparent'};
  color: ${(props) => props.color};
`;

export const HeaderSpacing = styled.div`
  height: ${height};
`;

const Logo = styled.span`
  font-size: 4rem;
  font-family: 'Noto Sans', sans-serif;
  display: flex;
  align-items: center;
`;

interface HeaderProps {
  variant?: 'default' | 'invert';
  children: React.ReactNode;
}

export const Header = ({
  children,
  variant = 'default',
  ...props
}: HeaderProps) => {
  const color =
    variant === 'default'
      ? 'rgba(37, 56, 88, 0.9)'
      : 'rgba(255, 255, 255, 0.75)';

  return (
    <StyledHeader variant={variant} color={color} {...props}>
      <a href="/" css={{ textDecoration: 'none', color: 'currentColor' }}>
        <Logo>
          <span
            css={css`
              font-size: 2.5rem;
              font-weight: 600;

              @media only screen and (min-width: 500px) {
                font-size: 1em;
                font-weight: 500;
              }
            `}>
            Compiled
          </span>
        </Logo>
      </a>
      <ScreenReaderText aria-label="Compiled see ess ess in jay ess">
        Compiled CSS-in-JS
      </ScreenReaderText>
      {children}
    </StyledHeader>
  );
};
