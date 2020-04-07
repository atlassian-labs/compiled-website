import React from 'react';
import '@compiled/css-in-js';

const danger = {
  color: 'red',
};

const base = {
  color: 'hotpink',
};

export const CompositionOrder = () => {
  return (
    <>
      <span css={{ ...base }}>This is hot pink.</span>
      <span css={{ ...danger, ...base }}>This is hot pink.</span>
      <span css={{ ...base, ...danger }}>This is red.</span>
    </>
  );
};
