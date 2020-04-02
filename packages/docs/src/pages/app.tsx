import React from 'react';
import { RootLayout, Content, HeaderSpacing } from '@compiled/website-ui';
import { Styled } from './styled';

export const App = () => {
  return (
    <RootLayout sidenav={<div>hello</div>}>
      <Styled />
    </RootLayout>
  );
};
