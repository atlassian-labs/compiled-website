import React from 'react';
import { styled } from '@compiled/css-in-js';

export const StyledHeader = styled.header`
  height: 12rem;
  display: flex;
  align-items: center;
  background-color: #f6f6f6;
  padding: 0 4rem;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1;
`;

const Hidden = styled.span`
  position: absolute;
  top: -99999px;
  width: 1;
  height: 1;
  opacity: 0;
  pointer-events: none;
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
    <Logo aria-hidden="true">👷‍♀️ Compiled</Logo>
    <Hidden>@compiled/css-in-js</Hidden>
    {children}
  </StyledHeader>
);
