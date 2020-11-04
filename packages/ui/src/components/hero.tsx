import React from 'react';
import '@compiled/core';

export const Hero = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      css={{
        background: 'linear-gradient(120deg,#DEEBFF 0%, #B3F5FF 100%)',
      }}>
      {children}
    </div>
  );
};
