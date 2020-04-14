import React from 'react';
import '@compiled/css-in-js';
import { Heading } from '@compiled/website-ui';

export const Anchor = ({ children }: { children: string | string[] }) => {
  const id = (typeof children === 'string'
    ? [children.trim().split(' ').join('-')]
    : // Somehow children arrays could END with a space.
      children.filter(
        (text, index) => !(index === children.length - 1 && text === ' ')
      )
  )
    .filter((child) => typeof child === 'string')
    .map((child) => child.trim().split(' ').join('-'))
    .join('-')
    .toLowerCase();

  return (
    <a
      href={`#${id}`}
      id={id}
      // @ts-ignore
      css={{
        color: 'currentColor',
        textDecoration: 'none',
        position: 'relative',
        ':before': {
          opacity: 0,
          content: '🔗',
          position: 'absolute',
          left: '-4rem',
          fontSize: '3rem',
          transform: 'translateX(1rem)',
          transition: 'opacity 100ms, transform 100ms',
          paddingRight: '5rem',
          top: 2,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
        },
        ':hover': {
          ':before': {
            opacity: 1,
            transform: 'none',
          },
        },
      }}>
      {children}
    </a>
  );
};

export const ToAnchor = ({
  children,
  depth,
}: {
  children: string;
  depth: number;
}) => {
  return (
    <Heading style={{ marginLeft: `${depth}rem` }} look="h500">
      <a
        css={{ color: '#7ab2c8', textDecoration: 'none' }}
        href={`#${children.trim().split(' ').join('-').toLowerCase()}`}>
        {children}
      </a>
    </Heading>
  );
};
