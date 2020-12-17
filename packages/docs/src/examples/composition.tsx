import React from 'react';
import { readFileSync } from 'fs';
import { composition } from '@compiled/website-examples';
import { Example } from '@compiled/website-ui';

export const CompositionIdentifier = () => {
  return (
    <Example
      before={readFileSync(
        __dirname +
          '../../../../examples/dist/jsx/css-prop-composition-identifier.js',
        'utf-8'
      )}
      after={readFileSync(
        __dirname +
          '../../../../examples/dist/js/css-prop-composition-identifier.js',
        'utf-8'
      )}>
      <composition.CompositionIdentifier />
    </Example>
  );
};

export const CompositionMultiple = () => {
  return (
    <Example
      before={readFileSync(
        __dirname +
          '../../../../examples/dist/jsx/css-prop-composition-multiple.js',
        'utf-8'
      )}
      after={readFileSync(
        __dirname +
          '../../../../examples/dist/js/css-prop-composition-multiple.js',
        'utf-8'
      )}>
      <composition.CompositionMultiple />
    </Example>
  );
};
