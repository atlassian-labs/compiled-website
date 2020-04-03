import { styled } from '@compiled/css-in-js';
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

  > * {
    border-radius: 0 0 5px 5px;
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
  border-radius: 3px 3px 0 0;
  display: block;
  width: 100%;
  padding: 1.5rem;
  border: none;
  background: #7ab2c84f;
  text-align: center;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 600;
  color: rgba(37, 56, 88, 0.9);
`;

const Example = ({ before, after, children }: ExampleProps) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div>
      <ExampleButton onClick={() => setIsShown((prev) => !prev)}>
        {isShown ? 'Show code' : 'Show compiled'}
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
