import React from 'react';
import { readFileSync } from 'fs';
import { cssProp } from '@compiled/website-examples';
import { Example } from '@compiled/website-ui';

export const CssPropObj = () => {
  return (
    <Example
      exampleCode="<EmphasisText>Arrange</EmphasisText>"
      before={readFileSync(
        __dirname + '../../../../examples/dist/jsx/css-prop-obj.js',
        'utf-8'
      )}
      after={readFileSync(
        __dirname + '../../../../examples/dist/js/css-prop-obj.js',
        'utf-8'
      )}>
      <cssProp.CssPropObj>Arrange</cssProp.CssPropObj>
    </Example>
  );
};

export const CssPropString = () => {
  return (
    <Example
      exampleCode="<EmphasisText>Sort out</EmphasisText>"
      before={readFileSync(
        __dirname + '../../../../examples/dist/jsx/css-prop-string.js',
        'utf-8'
      )}
      after={readFileSync(
        __dirname + '../../../../examples/dist/js/css-prop-string.js',
        'utf-8'
      )}>
      <cssProp.CssPropString>Sort out</cssProp.CssPropString>
    </Example>
  );
};

export const CssPropDynamic = () => {
  return (
    <Example
      exampleCode="<EmphasisText primary>Systematize</EmphasisText>"
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
      exampleCode={
        '<CustomColorText color="pink">This text is pink</CustomColorText>'
      }
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
      exampleCode={
        '<CustomColorText color="pink">This text should be pink</CustomColorText>'
      }
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
        This text should be pink
      </cssProp.CssPropCompositionIncorrect>
    </Example>
  );
};

export const CssPropCompositionNoStyle = () => {
  return (
    <Example
      exampleCode={
        '<CustomColorText color="pink">This text should be pink</CustomColorText>'
      }
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
        This text should be pink
      </cssProp.CssPropCompositionNoStyle>
    </Example>
  );
};

export const CssPropConditionalRules = () => {
  return (
    <Example
      exampleCode="<Lozenge primary>Arrange</Lozenge>"
      before={readFileSync(
        __dirname +
          '../../../../examples/dist/jsx/css-prop-conditional-rules.js',
        'utf-8'
      )}
      after={readFileSync(
        __dirname +
          '../../../../examples/dist/js/css-prop-conditional-rules.js',
        'utf-8'
      )}>
      <cssProp.CssPropConditionalRules>Arrange</cssProp.CssPropConditionalRules>
    </Example>
  );
};
