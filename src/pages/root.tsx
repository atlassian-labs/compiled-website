import React from 'react';
import { styled } from '@compiled/css-in-js';
import { Header } from '../components/header';

const Layout = styled.div``;

interface RootProps {
  children: React.ReactNode;
}

export const RootLayout = ({ children }: RootProps) => (
  <Layout>
    <Header>
      <nav aria-label="main"></nav>
    </Header>

    <nav aria-label="sidebar"></nav>

    <main>{children}</main>
  </Layout>
);
