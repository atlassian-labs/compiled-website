import React from 'react';
import { ClassNames } from '@compiled/core';

export const ZoomOnHover = ({ children }) => (
  <ClassNames>
    {({ css }) => (
      <span
        className={css({
          display: 'inline-block',
          transition: 'transform 100ms',
          transformOrigin: 'center',
          ':hover': {
            transform: 'scale(2)',
          },
        })}>
        {children}
      </span>
    )}
  </ClassNames>
);
