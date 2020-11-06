import React, { useState } from 'react';
import { styled } from '@compiled/core';
import {
  Hero,
  Heading,
  Terminal,
  Content,
  RootLayout,
  HeaderSpacing,
  VerticalStack,
  HideSmall,
  Example,
  mdxComponents,
  colors,
} from '@compiled/website-ui';
import { cssProp, styled as styledExamples } from '@compiled/website-examples';
import { readFileSync } from 'fs';
import { MDXProvider } from '@mdx-js/react';

const cssPropBefore = readFileSync(
  __dirname + '../../../../examples/dist/jsx/css-prop-button.js',
  'utf-8'
);
const cssPropAfter = readFileSync(
  __dirname + '../../../../examples/dist/js/css-prop-button.js',
  'utf-8'
);

const styledBefore = readFileSync(
  __dirname + '../../../../examples/dist/jsx/styled-button.js',
  'utf-8'
);
const styledAfter = readFileSync(
  __dirname + '../../../../examples/dist/js/styled-button.js',
  'utf-8'
);
const LandingPageContent = require('../pages/landing-content.mdx').default;

const codeBackground = 'rgba(23, 43, 77, 0.7)';

const TerminalStripe = styled.div`
  background-color: ${codeBackground};
`;

const TabButton = (props: { children: React.ReactNode; onClick: any }) => {
  return (
    <button
      {...props}
      css={{
        padding: '8px 12px',
        margin: 0,
        cursor: 'pointer',
        opacity: props['aria-pressed'] ? 0.9 : 0.5,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        ':hover, :focus': {
          outline: 'none',
        },
        backgroundColor: 'transparent',
        border: 'none',
        '&&& *': {
          color: props['aria-pressed']
            ? 'rgba(255, 255, 255, 0.99)'
            : 'rgba(255, 255, 255, 0.75)',
        },
        ':disabled': {
          cursor: 'not-allowed',
        },
      }}>
      <Heading as="span" look="h500">
        {props.children}
      </Heading>
    </button>
  );
};

const CodeExamples = () => {
  const [shown, setShown] = useState<'css' | 'styled' | 'class'>('css');

  return (
    <div>
      <TabButton aria-pressed={shown === 'css'} onClick={() => setShown('css')}>
        Css prop
      </TabButton>
      <TabButton
        aria-pressed={shown === 'styled'}
        onClick={() => setShown('styled')}>
        Styled component
      </TabButton>

      {shown === 'css' && (
        <Example
          codeBackground={codeBackground}
          variant="fixed"
          before={cssPropBefore}
          after={cssPropAfter}>
          <cssProp.Button variant="primary">Compile</cssProp.Button>
        </Example>
      )}
      {shown === 'styled' && (
        <Example
          codeBackground={codeBackground}
          variant="fixed"
          before={styledBefore}
          after={styledAfter}>
          <styledExamples.Button variant="default">
            Compile
          </styledExamples.Button>
        </Example>
      )}
    </div>
  );
};

export default () => (
  <RootLayout invertHeader>
    <Hero>
      <Content>
        <HeaderSpacing aria-hidden="true" />
        <VerticalStack spacing={12} gap={3}>
          <Heading look="h100">
            <span
              css={{
                color: 'rgba(255, 255, 255, 0.75)',
                maxWidth: '75%',
                display: 'block',
              }}>
              <HideSmall>Build time atomic CSS in JS. </HideSmall>
              Bake, consume, extract. Everywhere.
            </span>
          </Heading>
          <CodeExamples />
        </VerticalStack>
      </Content>

      <TerminalStripe>
        <Content>
          <Terminal language="bash">
            {`
npm install @compiled/core --save
`}
          </Terminal>
        </Content>
      </TerminalStripe>
    </Hero>

    <Content>
      <MDXProvider components={mdxComponents}>
        <LandingPageContent />
      </MDXProvider>

      <VerticalStack align="right" spacing={10}>
        <a
          href="docs/installation"
          css={{
            color: colors.primary,
            fontSize: '1.25em',
            textDecoration: 'none',
            textAlign: 'right',
          }}>
          <Heading look="h500" as="span">
            Getting started
          </Heading>
          <br />
          <span
            css={{
              textTransform: 'capitalize',
              position: 'relative',
              ':after': {
                content: '›',
                position: 'absolute',
                right: '-2rem',
              },
            }}>
            Installation
          </span>
        </a>
      </VerticalStack>
    </Content>
  </RootLayout>
);
