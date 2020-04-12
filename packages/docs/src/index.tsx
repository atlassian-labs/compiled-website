import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './components/app';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/docs">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementsByTagName('body')[0]
);
