import React from 'react';
import '@compiled/css-in-js';
import { Heading } from '@compiled/website-ui';

export const Footer = () => (
  <footer
    css={{
      margin: '6rem 0',
      fontWeight: 600,
    }}>
    <Heading look="h500" as="span">
      <a
        css={{ color: 'currentColor', textDecoration: 'none' }}
        href="https://twitter.com/itsmadou">
        ❤️ Michael Dougall
      </a>
    </Heading>
  </footer>
);
