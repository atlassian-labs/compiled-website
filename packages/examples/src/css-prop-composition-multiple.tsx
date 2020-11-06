import React from 'react';
import '@compiled/core';
import { basebase } from './mixins';

const danger = {
  color: 'red',
};

const base = {
  color: 'hotpink',
  padding: '0.5rem 0',
  backgroundColor: 'rgba(0, 0, 0, 0.05)',
};

export const CompositionMultiple = () => {
  return (
    <div>
      <div css={base}>This is hot pink.</div>
      <div css={[danger, base]}>This is also hot pink.</div>
      <div css={{ ...base, ...danger }}>This is red!</div>
    </div>
  );
};
