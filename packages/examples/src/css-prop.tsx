import React from 'react';
import '@compiled/css-in-js';

export const EmphasisText = (props) => {
  const color = props.massive ? '#00B8D9' : '#36B37E';
  return (
    <span
      css={{
        color,
        textTransform: 'uppercase',
        fontWeight: 600,
      }}>
      {props.children}
    </span>
  );
};
