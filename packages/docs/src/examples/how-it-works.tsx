import React from 'react';
import { readFileSync } from 'fs';
import { CodeBlock } from '@compiled/website-ui';

const before = readFileSync(
  __dirname + '../../../../examples/dist/jsx/styled-dynamic-decl.js',
  'utf-8'
);
const after = readFileSync(
  __dirname + '../../../../examples/dist/js/styled-dynamic-decl.js',
  'utf-8'
);

export const BeforeHowItWorks = () => (
  <CodeBlock language="jsx">{before}</CodeBlock>
);

export const AfterHowItWorks = () => (
  <CodeBlock language="jsx">{after}</CodeBlock>
);
