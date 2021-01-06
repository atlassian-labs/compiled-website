import React from 'react';
import { readFileSync } from 'fs';
import { classNames } from '@compiled/website-examples';
import { Example } from '@compiled/website-ui';

export const ClassNamesObj = () => {
  return (
    <Example
      exampleCode="<EmphasisText>Teal text</EmphasisText>"
      before={readFileSync(
        __dirname + '../../../../examples/dist/jsx/class-names-obj.js',
        'utf-8'
      )}
      after={readFileSync(
        __dirname + '../../../../examples/dist/js/class-names-obj.js',
        'utf-8'
      )}>
      <classNames.ClassNamesObj>Teal text</classNames.ClassNamesObj>
    </Example>
  );
};

export const ClassNamesDynamic = () => {
  return (
    <Example
      exampleCode="<EmphasisText primary>Teal text</EmphasisText>"
      before={readFileSync(
        __dirname + '../../../../examples/dist/jsx/class-names-dynamic.js',
        'utf-8'
      )}
      after={readFileSync(
        __dirname + '../../../../examples/dist/js/class-names-dynamic.js',
        'utf-8'
      )}>
      <classNames.ClassNamesDynamic primary>
        Teal text
      </classNames.ClassNamesDynamic>
    </Example>
  );
};

export const ClassNamesComposition = () => {
  return (
    <Example
      exampleCode={'<CustomColorText color="pink">Pink text</CustomColorText>'}
      before={readFileSync(
        __dirname + '../../../../examples/dist/jsx/class-names-composition.js',
        'utf-8'
      )}
      after={readFileSync(
        __dirname + '../../../../examples/dist/js/class-names-composition.js',
        'utf-8'
      )}>
      <classNames.ClassNamesComposition color="pink">
        Pink text
      </classNames.ClassNamesComposition>
    </Example>
  );
};
