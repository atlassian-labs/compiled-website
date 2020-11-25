/** @jsx jsx */
import { jsx } from '@emotion/core';

export const EmphasisText = (props) => (
  <span
    css={{
      color: '#00b8d9',
      textTransform: 'uppercase',
      fontWeight: 700,
    }}>
    {props.children}
  </span>
);
