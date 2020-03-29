/** @jsx jsx */
import { jsx } from '@compiled/css-in-js';
import { Hero } from '../components/hero';
import { Heading } from '../components/heading';
import { Comparison } from '../components/comparison';
import { Terminal } from '../components/code-block';
import { Content } from '../components/content';
import { RootLayout } from './root';
import { VerticalStack } from '../components/stack';

export default () => (
  <RootLayout>
    <Hero>
      <Content>
        <VerticalStack spacing={12} gap={3}>
          <Heading as="h900">Compile your CSS in JS</Heading>
          <Comparison
            before={`
import { styled } from '@compiled/css-in-js';

const Heading = styled.h1<{ color: string }>\`
  color: $\{props => props.color};
  font-size: 52px;
\`;
`}
            after={`
import React, { Fragment } from 'react';
import { Style } from '@compiled/css-in-js';

const Heading = props => (
  <Fragment>
    <Style>.css-a7988s{color:var(--color-a);font-size:52px;}</Style>
    <div className="css-a7988s"
      style={{ '--color-a': props.color }}>
      {props.children}
    </div>
  </Fragment>
);
`}
          />
        </VerticalStack>
      </Content>

      <div css={{ backgroundColor: 'rgba(39, 40, 34, 0.5)' }}>
        <Content>
          <Terminal language="bash">
            {`
npm i @compiled/css-in-js
`}
          </Terminal>
        </Content>
      </div>
    </Hero>

    <Content>
      <VerticalStack gap={2} spacing={10}>
        <Heading as="h800">With other familiar apis</Heading>

        <Comparison
          before={`
/** @jsx jsx */
import { jsx } from '@compiled/css-in-js';

<div css={{ color: 'blue' }}>
  hello, world!
</div>;
          `}
          after={`
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
        <Heading as="h800">Free consumers config</Heading>
        Shipping a component library? You won't have to worry about your consumers needing extra
        setup. All of the <strong>code is compiled into the Javascript</strong> output at build time
        - so your consumers don't need to change their build setup! This includes{' '}
        <strong>delivering SSR for free out of the box.</strong>
      </VerticalStack>

      <VerticalStack spacing={10} gap={2}>
        <Heading as="h800">And only a 700b runtime</Heading>
        With only a style component needed at runtime to manage moving styles to the head of your
        application, you won't have to worry about bundle size bloat. Watch out for future
        optimizations coming - including a transformer that extracts CSS -{' '}
        <strong>completely removing the runtime</strong>, and then another to atomic-ify your CSS to
        reduce the curve of written styles.
      </VerticalStack>

      <VerticalStack align="right" spacing={10}>
        <Heading as="h800">
          <a
            css={{
              display: 'inline-block',
              color: '#0052CC',
              textDecoration: 'none',
              transition: 'transform 70ms ease-in-out',
              '&:hover': { transform: 'translateX(5px)', paddingLeft: 5 },
            }}
            href="https://github.com/atlassian-labs/compiled-css-in-js#installation">
            Get started now <span aria-hidden="true">➡</span>
          </a>
        </Heading>
      </VerticalStack>
    </Content>
  </RootLayout>
);
