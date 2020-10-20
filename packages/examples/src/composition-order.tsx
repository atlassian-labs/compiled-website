import React from 'react';
import '@compiled/core';

const danger = {
  color: 'red',
};

const base = {
  color: 'hotpink',
  padding: '0.5rem 0',
  backgroundColor: 'rgba(0, 0, 0, 0.05)',
};

export const CompositionOrder = () => {
  return (
    <div>
      <div css={base}>This is hot pink.</div>
      <div css={[danger, base]}>This is also hot pink.</div>
      <div css={{ ...base, ...danger }}>This is red!</div>
    </div>
  );
};
