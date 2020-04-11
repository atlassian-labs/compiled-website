import React from 'react';
import { styled } from '@compiled/css-in-js';
import {
  Hero,
  Heading,
  Comparison,
  Terminal,
  Content,
  RootLayout,
  HeaderSpacing,
  VerticalStack,
} from '@compiled/website-ui';
import { readFileSync } from 'fs';

const styledExampleBefore = readFileSync(
  __dirname + '../../../../examples/src/styled.tsx',
  'utf-8'
);
const styledExampleAfter = readFileSync(
  __dirname + '../../../../examples/dist/styled.jsx',
  'utf-8'
);

const TerminalStripe = styled.div`
  background-color: rgba(39, 40, 34, 0.08);
`;

const GetStartedLink = styled.a({
  background: 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
  backgroundSize: '45rem',
  borderRadius: 44,
  padding: '1rem 2rem',
  boxSizing: 'border-box',
  border: '3px solid rgba(122, 177, 201, 0.3)',
  display: 'inline-block',
  color: 'currentColor',
  textDecoration: 'none',
  transition: 'transform 70ms ease-in-out',
  '&:hover': { transform: 'translateX(5px)' },
});

export default () => (
  <RootLayout>
    <Hero>
      <Content>
        <HeaderSpacing aria-hidden="true" />
        <VerticalStack spacing={12} gap={3}>
          <Heading look="h100">
            <span css={{ maxWidth: '75%', display: 'block' }}>
              The CSS in JS authoring experience we love without the runtime
              cost
            </span>
          </Heading>
          <Comparison before={styledExampleBefore} after={styledExampleAfter} />
        </VerticalStack>
      </Content>

      <TerminalStripe>
        <Content>
          <Terminal language="bash">
            {`
npm i @compiled/css-in-js
`}
          </Terminal>
        </Content>
      </TerminalStripe>
    </Hero>

    <Content>
      <VerticalStack gap={2} spacing={10}>
        <Heading look="h200">With other familiar apis</Heading>
        <p>
          Made for easy migration from your previous CSS in JS library to
          Compiled - so the css prop and class names component have come along
          for the ride!
        </p>

        <Comparison
          before={`
import React from 'react';
import '@compiled/css-in-js';

<div css={{ color: 'blue' }}>
  hello, world!
</div>;
`}
          after={`
import React from 'react';
import { ClassNames } from '@compiled/css-in-js';

<ClassNames>
  {({ css }) => (
    <div className={css({ color: 'blue' })}>
      hello, world!
    </div>
  )}
</ClassNames>
`}
        />
      </VerticalStack>

      <VerticalStack spacing={10} gap={2}>
        <Heading look="h200">Free our consumers config</Heading>
        Shipping a component library? Well don't worry about consumers needing
        extra setup - all of the{' '}
        <strong>code is compiled into the JavaScript</strong> output at build
        time so your consumers don't need to change their build setup! This
        includes <strong>delivering SSR for free out of the box.</strong> Just
        import a Compiled component and it'll work fantastically.
      </VerticalStack>

      <VerticalStack spacing={10} gap={2}>
        <Heading look="h200">And only a tiny runtime</Heading>
        With only a single component needed at runtime to manage moving styles
        to the head of your app, we won't have to worry about bundle size bloat.
        Watch out for future optimizations coming - including a transformer that
        extracts CSS - <strong>completely removing the runtime</strong>, and
        then another to atomic-ify your CSS to{' '}
        <strong>reduce the curve of written CSS</strong>.
      </VerticalStack>
      <VerticalStack align="right" spacing={10}>
        <a
          href="docs"
          css={{
            color: '#7ab2c8',
            fontSize: '1.25em',
            textDecoration: 'none',
            textAlign: 'right',
          }}>
          <Heading look="h500" as="span">
            Getting started
          </Heading>
          <br />
          <div
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
          </div>
        </a>
      </VerticalStack>
    </Content>
  </RootLayout>
);
