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
      <cssProp.CssPropObj color="#FF5630">Assemble</cssProp.CssPropObj>
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
      <cssProp.CssPropString color="#FF5630">
        Put together
      </cssProp.CssPropString>
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
      <cssProp.CssPropDynamic primary>Make up</cssProp.CssPropDynamic>
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
        Pink text
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
        Will be incorrectly blue
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
        CSS variable value will not be set
      </cssProp.CssPropCompositionNoStyle>
    </Example>
  );
};
