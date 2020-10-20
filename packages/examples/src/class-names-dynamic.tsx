import React from 'react';
import { ClassNames } from '@compiled/core';

export const Dynamic = ({ children, color }) => (
  <ClassNames>
    {({ css, style }) => (
      <span
        style={style}
        className={css({
          color,
        })}>
        {children}
      </span>
    )}
  </ClassNames>
);
