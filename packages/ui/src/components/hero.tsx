import React from 'react';
import '@compiled/core';

export const Hero = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      css={{
        background: 'linear-gradient(120deg,#6554C0 0%, #FF7452 100%)',
      }}>
      {children}
    </div>
  );
};
