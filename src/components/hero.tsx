/** @jsx jsx */
import React from 'react';
import { jsx } from '@compiled/css-in-js';
import { Typography } from '../components/typography';
import { heroBackground } from '../utils/colors';

export const Hero = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      css={{
        height: '80vh',
        backgroundColor: heroBackground,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        minHeight: '70rem',
      }}>
      {children}
    </div>
  );
};
