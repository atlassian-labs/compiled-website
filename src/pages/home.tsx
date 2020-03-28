import React from 'react';
import { Hero } from '../components/hero';
import { Heading } from '../components/heading';
import { Comparison } from '../components/comparison';
import { CodeBlock } from '../components/code-block';
import { Content } from '../components/content';
import { RootLayout } from './root';

export default () => (
  <RootLayout>
    <Hero>
      <Content>
        <Heading as="h900">Compiled CSS in JS</Heading>
        <Comparison
          before={`
import { styled } from '@compiled/css-in-js';

const StyledDiv = styled.div\`
  color: blue;
\`;
`}
          after={`
import React, { Fragment } from 'react';

const StyledDiv = (props) => (
  <Fragment>
    <style>{'.css-a7988 { color: blue; }'}</style>
    <div className="css-a7988">{props.children}</div>
  </Fragment>
);
`}
        />
      </Content>
    </Hero>

    <CodeBlock language="bash">
      {`
npm i @compiled/css-in-js
`}
    </CodeBlock>

    <Content>
      <Heading as="h800">Blazing Fast</Heading>

      <p>
        Your CSS is compiled at build time allowing you to lean on a super powered CSS in JS
        developer experience while receiving best-in-class performance.
      </p>

      <Heading as="h800">Familiar APIs</Heading>
      <Heading as="h700">Styled components</Heading>
      <CodeBlock>
        {`
import { styled } from '@compiled/css-in-js';

styled.div\`
  color: blue;
\`;
`}
      </CodeBlock>
      <Heading as="h700">CSS prop</Heading>
      <CodeBlock>
        {`
/** @jsx jsx */
import { jsx } from '@compiled/css-in-js';

<div css={{ color: 'blue' }}>hello, world!</div>;
`}
      </CodeBlock>
      <Heading as="h700">ClassNames component</Heading>
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
      <Heading as="h800">Tiny Runtime</Heading>

      <p>
        Tiny runtime that moves styles to the head and that's it! Everything else is paid for at
        build time for blazing fast styling for your web application.
      </p>

      <Heading as="h800">Config Once Run Anywhere</Heading>

      <p>
        Configure your application once and run your components anywhere. Publishing a component
        library? Your consumers don't need to configure anything!
      </p>

      <a href="https://github.com/atlassian-labs/compiled-css-in-js#installation">
        <Heading as="h800">Get Started Now</Heading>
      </a>
    </Content>
  </RootLayout>
);
