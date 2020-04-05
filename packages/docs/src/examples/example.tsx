import { styled } from '@compiled/css-in-js';
import React, { useState, useRef } from 'react';
import { CodeBlock } from '@compiled/website-ui';

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
    display: none;
  }

  &[data-is-shown='true'] {
    > :first-child {
      display: none;
    }

    > :last-child {
      display: block;
    }
  }
`;

const ExampleButton = styled.button<{
  fullWidth?: boolean;
  isSelected?: boolean;
}>`
  border-radius: 5px 5px 0 0;
  display: block;
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
  padding: 1.5rem;
  border: none;
  background: #fff;
  text-align: center;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 600;
  color: ${(props) => (props.isSelected ? '#7ab2c8' : 'rgba(37, 56, 88, 0.9)')};

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
  padding: 0.5rem;
  background: #fff;
  position: relative;

  [data-button] {
    margin-left: auto;
  }
`;

export const Example = ({ before, after, children }: ExampleProps) => {
  const [isShown, setIsShown] = useState(false);
  const [htmlShown, setHtmlShown] = useState(false);
  const [html, setHtml] = useState('');

  return (
    <ExampleRoot>
      <ExampleButton fullWidth onClick={() => setIsShown((prev) => !prev)}>
        {isShown ? 'Show code' : 'Show compiled'}
      </ExampleButton>
      <ExampleSwitcher data-is-shown={isShown}>
        <CodeBlock>{before}</CodeBlock>
        <CodeBlock>{after}</CodeBlock>
      </ExampleSwitcher>
      <ExampleContainer>
        <span
          css={{ display: 'flex', padding: '1.5rem', alignItems: 'center' }}
          ref={(ref) => (ref ? setHtml(ref.innerHTML) : '')}>
          {children}
        </span>
        <ExampleButton
          data-button
          isSelected={htmlShown}
          onClick={() => setHtmlShown((prev) => !prev)}>
          HTML
        </ExampleButton>
        <span
          data-code
          css={{
            opacity: htmlShown ? 1 : 0,
            paddingTop: '2rem',
            transition: 'opacity 50ms',
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            minHeight: '100%',
          }}>
          <CodeBlock>{html}</CodeBlock>
        </span>
      </ExampleContainer>
    </ExampleRoot>
  );
};
