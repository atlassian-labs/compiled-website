import React from 'react';
import '@compiled/core';
import { Content } from '@compiled/website-ui';

export const Footer = () => (
  <footer
    css={{
      marginTop: '6rem',
      padding: '10rem',
      background: '#FAFBFC',
    }}>
    <Content>Copyright © 2020 Atlassian</Content>
  </footer>
);
