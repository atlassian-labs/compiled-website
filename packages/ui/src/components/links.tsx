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

export function PageLink({ to, hard, section, children }: PageLink) {
  const PageLink = hard ? 'a' : Link;
  const props = hard ? { href: to } : { to };

  return (
    <PageLink
      {...props}
      css={{
        textDecoration: 'none',
        textAlign: 'right',
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
        {children}
        <span
          aria-hidden
          css={{ position: 'absolute', transform: 'translateX(80%)' }}>
          ›
        </span>
      </Heading>
    </PageLink>
  );
}
