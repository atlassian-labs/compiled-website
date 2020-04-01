import React from 'react';
import { Styled } from './styled';

export const App = () => {
  return (
    <div>
      <header>
        <span aria-hidden="true">👷‍♀</span> compiled
        <nav aria-label="main"></nav>
      </header>

      <nav aria-label="sections"></nav>

      <main>
        <Styled />
      </main>
      <footer></footer>
    </div>
  );
};
