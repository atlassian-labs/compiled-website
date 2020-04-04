import React from 'react';
import '@compiled/css-in-js';
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
