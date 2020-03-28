import React from 'react';
import { styled } from '@compiled/css-in-js';

export const StyledHeader = styled.header`
  height: 12rem;
  display: flex;
  align-items: center;
  background-color: #091f41;
  padding: 0 2rem;
  color: white;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1;
`;

interface HeaderProps {
  children: React.ReactNode;
}

export const Header = ({ children }: HeaderProps) => (
  <StyledHeader>
    <span>@compiled/css-in-js</span>
    {children}
  </StyledHeader>
);
