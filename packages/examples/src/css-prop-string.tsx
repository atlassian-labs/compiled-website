/** @jsx jsx */
import { jsx, css } from '@emotion/core';

export const EmphasisText = (props) => (
  <span
    css={css`
      color: #00b8d9;
      text-transform: uppercase;
      font-weight: 700;
    `}>
    {props.children}
  </span>
);
