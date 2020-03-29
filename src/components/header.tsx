import React from 'react';
import { styled } from '@compiled/css-in-js';
import { ScreenReaderText } from './helpers';

export const StyledHeader = styled.header`
  height: 10rem;
  display: flex;
  align-items: center;
  padding: 0 3rem;
  position: relative;
  z-index: 1;
  background-color: #ffe32c;
`;

const Logo = styled.span`
  font-size: 4rem;
  font-family: 'Charlie Display';
`;

interface HeaderProps {
  children: React.ReactNode;
}

export const Header = ({ children }: HeaderProps) => (
  <StyledHeader>
    <Logo aria-hidden="true">👷‍♀</Logo>
    <ScreenReaderText aria-label="Compiled see ess ess in jay ess">
      Compiled Css in js
    </ScreenReaderText>
    {children}
  </StyledHeader>
);
