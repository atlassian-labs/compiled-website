import React, { useState } from 'react';
import { styled } from '@compiled/react';
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
import {
  cssProp,
  styled as styledExamples,
  classNames,
} from '@compiled/website-examples';
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

const classNamesBefore = readFileSync(
  __dirname + '../../../../examples/dist/jsx/class-names-button.js',
  'utf-8'
);
const classNamesAfter = readFileSync(
  __dirname + '../../../../examples/dist/js/class-names-button.js',
  'utf-8'
);

const LandingPageContent = require('../pages/landing-content.mdx').default;

const codeBackground = 'rgba(23, 43, 77, 0.4)';

const TerminalStripe = styled.div`
  background-color: ${codeBackground};
`;

const TabButton = (props: {
  children: React.ReactNode;
  onClick: any;
  isSelected: boolean;
  id: string;
}) => {
  return (
    <button
      {...props}
      aria-selected={props.isSelected}
      role="tab"
      css={{
        padding: '8px 12px',
        margin: 0,
        cursor: 'pointer',
        opacity: props.isSelected ? 0.99 : 0.7,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        ':hover, :focus': {
          outline: 'none',
          opacity: props.isSelected ? 1 : 0.9,
        },
        backgroundColor: 'transparent',
        border: 'none',
        '&&& *': {
          color: props.isSelected
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
  const [shown, setShown] = useState<'css' | 'styled' | 'cn'>('styled');

  return (
    <div>
      <TabButton
        id="styled-tab"
        aria-controls="styled-example"
        isSelected={shown === 'styled'}
        onClick={() => setShown('styled')}>
        Styled
      </TabButton>
      <TabButton
        id="css-tab"
        aria-controls="css-example"
        isSelected={shown === 'css'}
        onClick={() => setShown('css')}>
        Css prop
      </TabButton>
      <TabButton
        id="cn-tab"
        aria-controls="cn-example"
        isSelected={shown === 'cn'}
        onClick={() => setShown('cn')}>
        Class names
      </TabButton>

      {shown === 'css' && (
        <div id="css-example" role="tabpanel" aria-labelledby="css-tab">
          <Example
            codeBackground={codeBackground}
            variant="fixed"
            exampleCode="<Button>Button</Button>"
            before={cssPropBefore}
            after={cssPropAfter}>
            <cssProp.Button>Button</cssProp.Button>
          </Example>
        </div>
      )}
      {shown === 'styled' && (
        <div id="styled-example" role="tabpanel" aria-labelledby="styled-tab">
          <Example
            codeBackground={codeBackground}
            variant="fixed"
            exampleCode="<Button>Button</Button>"
            before={styledBefore}
            after={styledAfter}>
            <styledExamples.Button>Button</styledExamples.Button>
          </Example>
        </div>
      )}
      {shown === 'cn' && (
        <div id="cn-example" role="tabpanel" aria-labelledby="cn-tab">
          <Example
            codeBackground={codeBackground}
            variant="fixed"
            exampleCode="<Button>{props => <button {...props}>Button</button>}</Button>"
            before={classNamesBefore}
            after={classNamesAfter}>
            <classNames.Button>
              {(props) => <button {...props}>Button</button>}
            </classNames.Button>
          </Example>
        </div>
      )}
    </div>
  );
};

export default () => (
  <RootLayout invertHeader>
    <Hero>
      <Content>
        <HeaderSpacing aria-hidden="true" />
        <VerticalStack gap={3}>
          <Heading look="h100">
            <span
              css={{
                color: 'rgba(255, 255, 255, 0.75)',
                maxWidth: '75%',
                display: 'block',
              }}>
              Build time{' '}
              <a
                css={{
                  color: 'rgba(255, 255, 255, 0.75)',
                  ':hover': {
                    color: 'rgba(255, 255, 255, 0.9)',
                  },
                }}
                href="/docs/atomic-css">
                atomic CSS
              </a>
              -in-JS. <HideSmall>Baked and ready to serve.</HideSmall>
            </span>
          </Heading>
          <CodeExamples />
        </VerticalStack>
      </Content>

      <TerminalStripe css={{ marginTop: '10rem' }}>
        <Content>
          <Terminal language="bash">
            {`
npm install @compiled/react
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
          href="docs/what-is-compiled"
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
            What is Compiled?
          </span>
        </a>
      </VerticalStack>
    </Content>
  </RootLayout>
);
