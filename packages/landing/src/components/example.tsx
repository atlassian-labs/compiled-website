/** @jsx jsx */
import { jsx } from '@emotion/core';

export const LargeHotPinkText = ({ children }) => (
  <span
    css={{
      color: 'hotpink',
      fontSize: 48,
    }}>
    {children}
  </span>
);
