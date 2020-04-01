/** @jsx jsx */
import React from 'react';
import { jsx } from '@compiled/css-in-js';
import { heroBackground } from '../utils/colors';

export const Hero = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      css={{
        background: heroBackground,
      }}>
      {children}
    </div>
  );
};
