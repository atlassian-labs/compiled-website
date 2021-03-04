import * as React from 'react';
import { Link } from 'react-router-dom';
import '@compiled/react';
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
  const PageLink = hard ? 'a' : Link;
  const props = hard ? { href: to } : { to };
  const isNext = direction === 'next';

  return (
    <PageLink
      {...props}
      data-next={isNext}
      data-previous={!isNext}
      css={{
        textDecoration: 'none',
        textAlign: isNext ? 'right' : 'left',
      }}>
      <Heading look="h500" as="span">
        {section}
      </Heading>

      <div
        css={{
          height: 12,
          width: 0,
        }}
      />

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
    </PageLink>
  );
}
