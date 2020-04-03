import { styled } from '@compiled/css-in-js';
import React, { useState, useRef } from 'react';
import { readFileSync } from 'fs';
import { CodeBlock } from '@compiled/website-ui';
import { ColoredText, EmphasisText } from '@compiled/website-examples';

interface ExampleProps {
  before: string;
  after: string;
  children: JSX.Element;
}

const ExampleRoot = styled.div`
  box-shadow: rgba(9, 30, 66, 0.25) 0px 12px 24px -6px,
    rgba(9, 30, 66, 0.31) 0px 0px 1px;
  border-radius: 5px;
`;

const ExampleSwitcher = styled.div`
  display: flex;

  > * {
    width: 100%;
    flex-shrink: 0;
  }

  > * {
    border-radius: 0;
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
  border-radius: 5px 5px 0 0;
  display: block;
  width: 100%;
  padding: 1.5rem;
  border: none;
  background: #fff;
  text-align: center;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 600;
  color: rgba(37, 56, 88, 0.9);

  :hover {
    color: #7ab2c8;
  }
`;

const ExampleContainer = styled.div`
  background-color: #fff;
  display: flex;
  border-radius: 0 0 5px 5px;
  z-index: 1;
  position: relative;
  padding: 2rem;
  background: #fff;
  flex-direction: column;
  position: relative;
`;

const Example = ({ before, after, children }: ExampleProps) => {
  const [isShown, setIsShown] = useState(false);
  const [htmlShown, setHtmlShown] = useState(false);
  const [html, setHtml] = useState('');

  return (
    <ExampleRoot>
      <ExampleButton onClick={() => setIsShown((prev) => !prev)}>
        {isShown ? 'Show code' : 'Show compiled'}
      </ExampleButton>
      <span
        onMouseOver={() => setHtmlShown(true)}
        onMouseOut={() => setHtmlShown(false)}>
        <ExampleSwitcher data-is-shown={isShown}>
          <CodeBlock>{before}</CodeBlock>
          <CodeBlock>{after}</CodeBlock>
        </ExampleSwitcher>
        <ExampleContainer>
          <span ref={(ref) => (ref ? setHtml(ref.innerHTML) : '')}>
            {children}
          </span>
          {htmlShown && (
            <span
              data-code
              style={{
                pointerEvents: 'none',
                position: 'absolute',
                top: 'calc(100% + 1rem)',
                left: 0,
                right: 0,
                minHeight: '100%',
              }}>
              <CodeBlock>{html}</CodeBlock>
            </span>
          )}
        </ExampleContainer>
      </span>
    </ExampleRoot>
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
      <ColoredText color="#FF5630">I am colored text</ColoredText>
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
      <EmphasisText massive>I am emphasized text</EmphasisText>
    </Example>
  );
};
