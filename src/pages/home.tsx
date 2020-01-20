import React from 'react';
import { styled } from '@compiled/css-in-js';

const Container = styled.div`
  color: white;
  font-size: 75px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  opacity: 0.8;
  padding-bottom: 50px;
  letter-spacing: -0.01em;
  font-weight: 400;
`;

const Blanket = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #172b4d;
`;

export default () => (
  <Blanket>
    <Container>@compiled/css-in-js</Container>
  </Blanket>
);
