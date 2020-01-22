/** @jsx jsx */
import React, { useState } from 'react';
import { jsx } from '@compiled/css-in-js';

interface ComparisonProps {
  before: string;
  after: string;
}

const CodeBlock = (props: { children: string }) => (
  <code css={{ display: 'block', minHeight: '10rem' }}>{props.children}</code>
);

export const Comparison = (props: ComparisonProps) => {
  return (
    <div>
      <CodeBlock>{props.before}</CodeBlock>
      <CodeBlock>{props.after}</CodeBlock>
    </div>
  );
};
