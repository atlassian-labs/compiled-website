import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Styled } from './pages/styled';
import { App } from './pages/app';

ReactDOM.render(
  <React.StrictMode>
    <App>
      <Styled />
    </App>
  </React.StrictMode>,
  document.getElementById('app')
);
