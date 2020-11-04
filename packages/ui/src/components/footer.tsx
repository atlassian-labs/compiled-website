import React from 'react';
import '@compiled/core';
import { Content, HorizontalStack } from '@compiled/website-ui';

export const Footer = () => (
  <footer
    css={{
      padding: '4rem',
      fontSize: 12,
      background: '#FAFBFC',
    }}>
    <Content>
      <HorizontalStack css={{ textAlign: 'center' }} gap={4}>
        <span>© {new Date().getFullYear()} Atlassian</span>
        <span>Careers</span>
        <span>Trademark</span>
        <span>Privacy</span>
        <span>License</span>
      </HorizontalStack>
    </Content>
  </footer>
);
