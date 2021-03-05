import * as React from 'react';
import { Link } from 'react-router-dom';
import '@compiled/react';
import { VerticalStack } from './stack';
import { Heading } from './heading';
import { primary } from '../utils/colors';

interface PageLink {
  to: string;
  children: string;
  section: string;
  hard?: boolean;
  direction: 'next' | 'previous';
}

export function PageLink({ to, hard, section, direction, children }: PageLink) {
  const A = hard ? 'a' : Link;
  const props = hard ? { href: to } : { to };
  const isNext = direction === 'next';

  return (
    <VerticalStack
      data-next={isNext}
      data-previous={!isNext}
      gap={1.5}
      css={{
        textAlign: isNext ? 'right' : 'left',
      }}>
      <Heading look="h500" as="div">
        {section}
      </Heading>

      <A
        css={{
          textDecoration: 'none',
        }}
        {...props}>
        <Heading
          as="span"
          look="h300"
          css={{
            color: primary,
            textTransform: 'capitalize',
          }}>
          {!isNext && (
            <span
              aria-hidden
              css={{ position: 'absolute', transform: 'translateX(-160%)' }}>
              ‹
            </span>
          )}

          {children}

          {isNext && (
            <span
              aria-hidden
              css={{ position: 'absolute', transform: 'translateX(80%)' }}>
              ›
            </span>
          )}
        </Heading>
      </A>
    </VerticalStack>
  );
}
