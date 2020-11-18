import React from 'react';
import { readFileSync } from 'fs';
import { classNames } from '@compiled/website-examples';
import { Example } from '@compiled/website-ui';

export const ClassNamesObj = () => {
  return (
    <Example
      exampleCode="TODO"
      before={readFileSync(
        __dirname + '../../../../examples/dist/jsx/class-names-obj.js',
        'utf-8'
      )}
      after={readFileSync(
        __dirname + '../../../../examples/dist/js/class-names-obj.js',
        'utf-8'
      )}>
      <span>TODO</span>
    </Example>
  );
};

export const ClassNamesDynamic = () => {
  return (
    <Example
      exampleCode="TODO"
      before={readFileSync(
        __dirname + '../../../../examples/dist/jsx/class-names-dynamic.js',
        'utf-8'
      )}
      after={readFileSync(
        __dirname + '../../../../examples/dist/js/class-names-dynamic.js',
        'utf-8'
      )}>
      <span>TODO</span>
    </Example>
  );
};

export const ClassNamesComposition = () => {
  return (
    <Example
      exampleCode="TODO"
      before={readFileSync(
        __dirname + '../../../../examples/dist/jsx/class-names-composition.js',
        'utf-8'
      )}
      after={readFileSync(
        __dirname + '../../../../examples/dist/js/class-names-composition.js',
        'utf-8'
      )}>
      <span>TODO</span>
    </Example>
  );
};
