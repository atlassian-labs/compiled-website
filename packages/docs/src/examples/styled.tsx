import { styled, ClassNames } from '@compiled/css-in-js';
import React, { useState } from 'react';
import { readFileSync } from 'fs';
import { CodeBlock } from '@compiled/website-ui';
import { Heading } from '@compiled/website-examples';

interface ExampleProps {
  before: string;
  after: string;
  children: JSX.Element;
}

const ExampleSwitcher = styled.div`
  display: flex;

  > * {
    width: 100%;
    flex-shrink: 0;
  }

  > :first-child {
    display: block;
  }

  > :last-child {
    visibility: hidden;
  }

  &[data-is-shown='true'] {
    > :first-child {
      display: none;
    }

    > :last-child {
      visibility: visible;
    }
  }
`;

const ExampleButton = styled.button`
  display: block;
  width: 100%;
  padding: 1rem;
  border: none;
  background: blue;
  text-align: center;
`;

const Example = ({ before, after, children }: ExampleProps) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div>
      <ExampleButton onClick={() => setIsShown((prev) => !prev)}>
        Move
      </ExampleButton>
      <ExampleSwitcher data-is-shown={isShown}>
        <CodeBlock>{before}</CodeBlock>
        <CodeBlock>{after}</CodeBlock>
      </ExampleSwitcher>
      {children}
    </div>
  );
};

export const StyledExample = () => {
  return (
    <Example
      before={readFileSync(
        __dirname + '../../../../examples/src/styled.tsx',
        'utf-8'
      )}
      after={readFileSync(
        __dirname + '../../../../examples/dist/styled.jsx',
        'utf-8'
      )}>
      <Heading color="red">Testing</Heading>
    </Example>
  );
};

export const StyledInvalidExample = () => {
  return (
    <Example
      before={readFileSync(
        __dirname + '../../../../examples/src/styled-invalid.tsx',
        'utf-8'
      )}
      after={readFileSync(
        __dirname + '../../../../examples/dist/styled-invalid.jsx',
        'utf-8'
      )}>
      <Heading color="red">Testing</Heading>
    </Example>
  );
};
