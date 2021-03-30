import { render } from 'react-dom';
import { StrictMode } from 'react';
import LandingPage from './components/landing';

render(
  <StrictMode>
    <LandingPage />
  </StrictMode>,
  document.getElementById('app')
);
