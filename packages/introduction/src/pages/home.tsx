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
      <VerticalStack spacing={10} gap={2}>
        <Heading look="h200">Best-in-class performance</Heading>
        <p>
          CSS is created at build time which unlocks massive optimizations for
          us. No longer do we have to worry about the initial rendering speed,
          or re-rendering costing us precious ms at scale. Write the same CSS in
          JS we're used too without the performance implications.
        </p>
      </VerticalStack>

      <VerticalStack gap={2} spacing={10}>
        <Heading look="h200">Migrate to a zero config reality</Heading>
        <p>
          The APIs we love are all here for the ride - CSS prop and class names
          component too! Our consumers don't even need to change how they
          consume our components, continuing the zero config story they don't
          need to configure their bundler, nor do they need to setup any
          specific things for server side rendering. It just works.
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
        <Heading look="h200">Just the beginning</Heading>
        <p>
          With zero config out-of-the-box today, we're not forgetting what
          tomorrow could look like. With the possibility for optional CSS
          extraction, transforming the CSS to an Atomic form, and even being
          able to use the CSS data for analysis across our code base, we're
          thinking up an exciting tomorrow.
        </p>
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
