/** @jsx jsx */
import { jsx } from '@compiled/css-in-js';
import { Hero } from '../components/hero';
import { Heading } from '../components/heading';
import { Comparison } from '../components/comparison';
import { CodeBlock } from '../components/code-block';
import { Content } from '../components/content';
import { RootLayout } from './root';
import { VerticalStack } from '../components/stack';
import { codeBackground } from '../utils/colors';

export default () => (
  <RootLayout>
    <Hero>
      <Content>
        <VerticalStack gap={3}>
          <Heading as="h900">Turns this into that</Heading>
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
    </Hero>

    <div css={{ backgroundColor: codeBackground }}>
      <Content>
        <CodeBlock before="$" language="bash">
          {`
$ npm i @compiled/css-in-js
`}
        </CodeBlock>
      </Content>
    </div>

    <Content>
      <VerticalStack gap={2} spacing={10}>
        <Heading as="h800">Familiar APIs</Heading>
        <Heading as="h700">Styled</Heading>
        <CodeBlock>
          {`
import { styled } from '@compiled/css-in-js';

styled.div\`
  color: blue;
\`;
`}
        </CodeBlock>
        <Heading as="h700">Css prop</Heading>
        <CodeBlock>
          {`
/** @jsx jsx */
import { jsx } from '@compiled/css-in-js';

<div css={{ color: 'blue' }}>hello, world!</div>;
`}
        </CodeBlock>
        <Heading as="h700">Class names component</Heading>
        <CodeBlock>
          {`
import { ClassNames } from '@compiled/css-in-js';

<ClassNames>
  {({ css }) => (
    <div className={css({ color: 'blue' })}>
      hello, world!
    </div>
  )}
</ClassNames>
`}
        </CodeBlock>
      </VerticalStack>
    </Content>
  </RootLayout>
);
