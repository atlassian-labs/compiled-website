import React from 'react';
import { readFileSync } from 'fs';
import { CodeBlock } from '@compiled/website-ui';
import { Heading } from '@compiled/website-examples';

const styledExampleBefore = readFileSync(
  __dirname + '../../../../examples/src/styled.tsx',
  'utf-8'
);
const styledExampleAfter = readFileSync(
  __dirname + '../../../../examples/dist/styled.jsx',
  'utf-8'
);

export const StyledExample = () => {
  return (
    <>
      <CodeBlock>{styledExampleBefore}</CodeBlock>
      <CodeBlock>{styledExampleAfter}</CodeBlock>
      <Heading color="red">Testing</Heading>
    </>
  );
};
