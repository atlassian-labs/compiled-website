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

const CompiledLogo = styled.div`
  width: 5rem;
  height: 6rem;
  position: relative;
  margin-right: 5rem;
  margin-top: 1.38rem;
  margin-bottom: 1.38rem;

  :before {
    position: absolute;
    display: block;
    content: '';
    width: 5rem;
    height: 6rem;
    left: 0;
    background-color: #00d7f6;
    transform: skewY(30deg);
    border-bottom-left-radius: 3px;
  }

  :after {
    position: absolute;
    display: block;
    content: '';
    width: 5rem;
    height: 6rem;
    right: -100%;
    background-color: #555ee9;
    transform: skewY(-30deg);
    border-bottom-right-radius: 3px;
  }
`;

interface HeaderProps {
  children: React.ReactNode;
}

export const Header = ({ children }: HeaderProps) => (
  <StyledHeader>
    <CompiledLogo>
      <Hidden>@compiled/css-in-js</Hidden>
    </CompiledLogo>
    {children}
  </StyledHeader>
);
