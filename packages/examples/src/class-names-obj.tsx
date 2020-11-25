import * as React from 'react';
import { ClassNames } from '@emotion/core';

export const EmphasisText = (props) => (
  <ClassNames>
    {({ css }) => (
      <span
        className={css({
          color: '#00b8d9',
          textTransform: 'uppercase',
          fontWeight: 700,
        })}>
        {props.children}
      </span>
    )}
  </ClassNames>
);
