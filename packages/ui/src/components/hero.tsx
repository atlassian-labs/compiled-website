import React from 'react';
import '@compiled/react';

export const Hero = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      css={{
        position: 'relative',
        overflow: 'hidden',
      }}>
      <div
        css={{
          '@keyframes move': {
            to: {
              transform: 'translateX(25%)',
            },
          },
          animation: '50s move',
          animationFillMode: 'forwards',
          background: 'linear-gradient(120deg,#6554C0 0%, #FF7452 100%)',
          pointerEvents: 'none',
          position: 'absolute',
          top: 0,
          left: '-50%',
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
      />
      {children}
    </div>
  );
};
