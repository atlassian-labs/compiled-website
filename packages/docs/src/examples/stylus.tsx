import React from 'react';
import { readFileSync } from 'fs';
import { stylus } from '@compiled/website-examples';
import { Example } from './example';

export const StylusBuiltInFunctions = () => {
  return (
    <Example
      before={readFileSync(
        __dirname + '../../../../examples/src/stylus-built-in-functions.tsx',
        'utf-8'
      )}
      after={readFileSync(
        __dirname + '../../../../examples/dist/stylus-built-in-functions.jsx',
        'utf-8'
      )}>
      <stylus.StylusBuiltInFunctions>
        Ruslan and Ludmila
      </stylus.StylusBuiltInFunctions>
    </Example>
  );
};
