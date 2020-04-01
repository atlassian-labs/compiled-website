import React from 'react';
import { Header } from '../components/header';

interface AppProps {
  children: React.ReactNode;
}

export const App = ({ children }: AppProps) => {
  return (
    <>
      <Header />
      <nav aria-label="side"></nav>
      <main>{children}</main>
    </>
  );
};
