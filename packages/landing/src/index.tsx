import { render } from 'react-dom';
import React from 'react';
import LandingPage from './components/landing';

render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>,
  document.getElementById('app')
);
