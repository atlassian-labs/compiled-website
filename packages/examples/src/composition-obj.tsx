import React from 'react';
import '@compiled/css-in-js';

const base = {
  color: 'hotpink',
};

export const CompositionObject = () => {
  return <span css={{ ...base }}>This is hot pink.</span>;
};
