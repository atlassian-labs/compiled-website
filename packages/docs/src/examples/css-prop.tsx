import React from 'react';
import { readFileSync } from 'fs';
import { cssProp } from '@compiled/website-examples';
import { Example } from '@compiled/website-ui';

export const CssPropObj = () => {
  return (
    <Example
      before={readFileSync(
        __dirname + '../../../../examples/dist/jsx/css-prop-obj.js',
        'utf-8'
      )}
      after={readFileSync(
        __dirname + '../../../../examples/dist/js/css-prop-obj.js',
        'utf-8'
      )}>
      <cssProp.CssPropObj color="#FF5630">Arrange</cssProp.CssPropObj>
    </Example>
  );
};

export const CssPropString = () => {
  return (
    <Example
      before={readFileSync(
        __dirname + '../../../../examples/dist/jsx/css-prop-string.js',
        'utf-8'
      )}
      after={readFileSync(
        __dirname + '../../../../examples/dist/js/css-prop-string.js',
        'utf-8'
      )}>
      <cssProp.CssPropString color="#FF5630">Sort out</cssProp.CssPropString>
    </Example>
  );
};

export const CssPropDynamic = () => {
  return (
    <Example
      before={readFileSync(
        __dirname + '../../../../examples/dist/jsx/css-prop-dynamic-decl.js',
        'utf-8'
      )}
      after={readFileSync(
        __dirname + '../../../../examples/dist/js/css-prop-dynamic-decl.js',
        'utf-8'
      )}>
      <cssProp.CssPropDynamic primary>Systematize</cssProp.CssPropDynamic>
    </Example>
  );
};

export const CssPropCompositionCorrect = () => {
  return (
    <Example
      before={readFileSync(
        __dirname +
          '../../../../examples/dist/jsx/css-prop-composition-correct.js',
        'utf-8'
      )}
      after={readFileSync(
        __dirname +
          '../../../../examples/dist/js/css-prop-composition-correct.js',
        'utf-8'
      )}>
      <cssProp.CssPropCompositionCorrect color="pink">
        This text is pink
      </cssProp.CssPropCompositionCorrect>
    </Example>
  );
};

export const CssPropCompositionIncorrect = () => {
  return (
    <Example
      before={readFileSync(
        __dirname +
          '../../../../examples/dist/jsx/css-prop-composition-incorrect.js',
        'utf-8'
      )}
      after={readFileSync(
        __dirname +
          '../../../../examples/dist/js/css-prop-composition-incorrect.js',
        'utf-8'
      )}>
      <cssProp.CssPropCompositionIncorrect color="pink">
        This text is incorrectly blue
      </cssProp.CssPropCompositionIncorrect>
    </Example>
  );
};

export const CssPropCompositionNoStyle = () => {
  return (
    <Example
      before={readFileSync(
        __dirname +
          '../../../../examples/dist/jsx/css-prop-composition-no-style.js',
        'utf-8'
      )}
      after={readFileSync(
        __dirname +
          '../../../../examples/dist/js/css-prop-composition-no-style.js',
        'utf-8'
      )}>
      <cssProp.CssPropCompositionNoStyle color="pink">
        CSS variable value not be set as falls back to body color
      </cssProp.CssPropCompositionNoStyle>
    </Example>
  );
};
