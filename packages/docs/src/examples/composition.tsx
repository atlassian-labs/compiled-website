import React from 'react';
import { readFileSync } from 'fs';
import { composition } from '@compiled/website-examples';
import { Example } from './example';

export const CompositionObject = () => {
  return (
    <Example
      before={readFileSync(
        __dirname + '../../../../examples/src/composition-obj.tsx',
        'utf-8'
      )}
      after={readFileSync(
        __dirname + '../../../../examples/dist/composition-obj.jsx',
        'utf-8'
      )}>
      <composition.CompositionObject />
    </Example>
  );
};

export const CompositionOrder = () => {
  return (
    <Example
      before={readFileSync(
        __dirname + '../../../../examples/src/composition-order.tsx',
        'utf-8'
      )}
      after={readFileSync(
        __dirname + '../../../../examples/dist/composition-order.jsx',
        'utf-8'
      )}>
      <composition.CompositionOrder />
    </Example>
  );
};

export const CompositionImports = () => {
  return (
    <Example
      before={readFileSync(
        __dirname + '../../../../examples/src/composition-imports.tsx',
        'utf-8'
      )}
      after={readFileSync(
        __dirname + '../../../../examples/dist/composition-imports.jsx',
        'utf-8'
      )}>
      <composition.CompositionImports />
    </Example>
  );
};
