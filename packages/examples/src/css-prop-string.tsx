import React from 'react';
import '@compiled/core';

export const EmphasisText = (props) => (
  <span
    css={`
      color: #00b8d9;
      text-transform: uppercase;
      font-weight: 700;
    `}>
    {props.children}
  </span>
);
