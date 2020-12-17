import React from 'react';
import { readFileSync } from 'fs';
import { classNames } from '@compiled/website-examples';
import { Example } from '@compiled/website-ui';

export const ClassNamesObj = () => {
  return (
    <Example
      exampleCode="<EmphasisText>Transpile</EmphasisText>"
      before={readFileSync(
        __dirname + '../../../../examples/dist/jsx/class-names-obj.js',
        'utf-8'
      )}
      after={readFileSync(
        __dirname + '../../../../examples/dist/js/class-names-obj.js',
        'utf-8'
      )}>
      <classNames.ClassNamesObj>Transpile</classNames.ClassNamesObj>
    </Example>
  );
};

export const ClassNamesDynamic = () => {
  return (
    <Example
      exampleCode="<EmphasisText>Builder</EmphasisText>"
      before={readFileSync(
        __dirname + '../../../../examples/dist/jsx/class-names-dynamic.js',
        'utf-8'
      )}
      after={readFileSync(
        __dirname + '../../../../examples/dist/js/class-names-dynamic.js',
        'utf-8'
      )}>
      <classNames.ClassNamesDynamic>Builder</classNames.ClassNamesDynamic>
    </Example>
  );
};

export const ClassNamesComposition = () => {
  return (
    <Example
      exampleCode={
        '<CustomColorText color="pink">This text is pink</CustomColorText>'
      }
      before={readFileSync(
        __dirname + '../../../../examples/dist/jsx/class-names-composition.js',
        'utf-8'
      )}
      after={readFileSync(
        __dirname + '../../../../examples/dist/js/class-names-composition.js',
        'utf-8'
      )}>
      <classNames.ClassNamesComposition color="pink">
        This text is pink
      </classNames.ClassNamesComposition>
    </Example>
  );
};
