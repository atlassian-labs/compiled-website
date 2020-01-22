import React from 'react';
import { Hero } from '../components/hero';
import { FixedHeader, PrimaryActions, SecondaryActions } from '../components/header';
import { Typography } from '../components/typography';
import { Comparison } from '../components/comparison';

export default () => (
  <main>
    <FixedHeader>
      <PrimaryActions>Compiled Getting Started API</PrimaryActions>
      <SecondaryActions>handbook twitter github</SecondaryActions>
    </FixedHeader>
    <Hero>
      <Typography as="h1">Compiled CSS in JS</Typography>
      <Comparison
        before={`
import { styled } from '@compiled/css-in-js';

styled.div\`
  color: blue;
\`;
`}
        after={`
(props) => (
  <>
    <style>{'.a { color: blue; }'}</style>
    <div className="a">{props.children}</div>
  </>
);
`}
      />
    </Hero>
  </main>
);
