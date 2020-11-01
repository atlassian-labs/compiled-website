import { render } from 'react-dom';
import React from 'react';
import Home from './pages/home';

render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('app')
);
