import React from 'react';
import { ClassNames } from '@compiled/core';

export const ZoomOnHoverCAF = ({ children }) => (
  <ClassNames>
    {({ css }) =>
      children({
        className: css({
          transition: 'transform 2000ms',
          ':hover': {
            transform: 'scale(2)',
          },
        }),
      })
    }
  </ClassNames>
);
