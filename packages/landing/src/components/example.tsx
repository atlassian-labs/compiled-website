import React from 'react';
import '@compiled/react';

export const LargeText = (props) => (
  <span
    css={{
      color: props.color,
      fontSize: 48,
    }}>
    {props.children}
  </span>
);
