import React from 'react';
import { styled } from '@compiled/css-in-js';

export const FixedHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 8rem;
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 0 2rem;

  :after {
    content: '';
    height: 8rem;
    display: block;
  }
`;

export const SecondaryActions = styled.nav`
  margin-left: auto;
`;

export const PrimaryActions = styled.nav``;
