import React from 'react';
import { styled } from '@compiled/css-in-js';

const Heading = styled.h1`
  color: red;
`;

export const Styled = () => {
  return <Heading>hello this is babel</Heading>;
};
