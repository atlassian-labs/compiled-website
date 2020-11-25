import * as React from 'react';
import { ClassNames } from '@emotion/core';

export const EmphasisText = (props) => (
  <ClassNames>
    {({ css }) => (
      <span
        // ^--- make sure to set style prop
        className={css({
          color: props.primary ? '#00B8D9' : '#36B37E',
          fontWeight: 600,
        })}>
        {props.children}
      </span>
    )}
  </ClassNames>
);
