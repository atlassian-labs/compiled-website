import * as React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';

const base = {
  color: 'hotpink',
};

export const CompositionIdentifier = () => {
  return <span css={base}>This is hot pink.</span>;
};
