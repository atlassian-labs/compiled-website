import React from 'react';
import '@compiled/css-in-js';

export const EmphasisText = (props) => (
  <span
    css={`
      color: #00b8d9;
      text-transform: uppercase;
      font-weight: 600;
    `}>
    {props.children}
  </span>
);
