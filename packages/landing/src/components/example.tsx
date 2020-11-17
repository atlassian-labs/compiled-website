import React from 'react';
import '@compiled/react';

export const LargeHotPinkText = ({ children }) => (
  <span
    css={{
      color: 'hotpink',
      fontSize: 48,
    }}>
    {children}
  </span>
);
