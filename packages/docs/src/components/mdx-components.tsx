import React from 'react';
import { styled } from '@compiled/core';
import { VerticalStack, Heading, CodeBlock } from '@compiled/website-ui';
import { Link } from 'react-router-dom';
import { MDXProviderComponentsProp } from '@mdx-js/react';
import { Anchor } from './anchor';

const Hr = styled.hr`
  color: rgba(0, 0, 0, 0.1);
  margin: 6rem 0;
`;

const Quote = styled.blockquote`
  padding: 2rem 3rem;
  margin: 6rem -3rem;
  color: rgba(37, 56, 88, 0.7);
  border-left: 3px solid #7ab2c8;
  background-color: #7ab2c814;
  opacity: 0.9;

  p {
    margin: 0;
  }
`;

const Code = styled.code`
  font-size: 0.9em;
  margin-top: 20px;
  color: currentColor;
  font-weight: 400;
  background-color: rgba(117, 63, 131, 0.07);
  border-radius: 5px;
  margin: 0;
  padding: 0.2rem 0.325rem;
`;

const P = styled.p`
  margin: 3rem 0;

  & + h2 {
    margin-top: 6rem;
  }
`;

export const components: MDXProviderComponentsProp = {
  h1: ({ children }) => (
    <Heading look="h100">
      <Anchor>{children}</Anchor>
    </Heading>
  ),
  h2: ({ children }) => (
    <Heading look="h200">
      <Anchor>{children}</Anchor>
    </Heading>
  ),
  h3: ({ children }) => (
    <Heading look="h300">
      <Anchor>{children} </Anchor>
    </Heading>
  ),
  h4: ({ children }) => (
    <Heading look="h400">
      <Anchor>{children}</Anchor>
    </Heading>
  ),
  h5: ({ children }) => (
    <Heading look="h500">
      <Anchor>{children} </Anchor>
    </Heading>
  ),
  p: ({ children }) => <P>{children}</P>,
  pre: ({ children }) => children,
  code: ({ children, className }) => (
    <VerticalStack spacing={2}>
      <CodeBlock language={className ? className.split('-')[1] : undefined}>
        {children}
      </CodeBlock>
    </VerticalStack>
  ),
  hr: () => <Hr />,
  inlineCode: ({ children }) => <Code>{children}</Code>,
  a: ({ href, children, ...props }) =>
    href.startsWith('http') ? (
      <a
        href={href}
        css={{ color: '#7ab2c8', textDecoration: 'none' }}
        target="_blank"
        rel="noopener noreferrer"
        {...props}>
        {children}
      </a>
    ) : (
      <Link
        to={href}
        css={{ color: '#7ab2c8', textDecoration: 'none' }}
        {...props}>
        {children}
      </Link>
    ),
  blockquote: (props) => <Quote {...props} />,
};
