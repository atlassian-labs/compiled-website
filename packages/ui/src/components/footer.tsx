import React from 'react';
import '@compiled/core';
import { Content } from '@compiled/website-ui';

export const Footer = () => (
  <footer
    css={{
      padding: '10rem',
      fontSize: 16,
      background: '#FAFBFC',
    }}>
    <Content>Copyright © 2020 Atlassian</Content>
  </footer>
);
