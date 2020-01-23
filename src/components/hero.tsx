/** @jsx jsx */
import React from 'react';
import { jsx } from '@compiled/css-in-js';
import { Heading } from './heading';
import { heroBackground } from '../utils/colors';

export const Hero = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      css={{
        backgroundColor: heroBackground,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '12rem 0',
      }}>
      {children}
    </div>
  );
};
