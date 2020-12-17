import React from 'react';
import { readFileSync } from 'fs';
import { styled } from '@compiled/website-examples';
import { Example } from '@compiled/website-ui';

export const StyledObj = () => {
  return (
    <Example
      exampleCode="<ColoredText>Assemble</ColoredText>"
      before={readFileSync(
        __dirname + '../../../../examples/dist/jsx/styled-obj.js',
        'utf-8'
      )}
      after={readFileSync(
        __dirname + '../../../../examples/dist/js/styled-obj.js',
        'utf-8'
      )}>
      <styled.StyledObj>Assemble</styled.StyledObj>
    </Example>
  );
};

export const StyledString = () => {
  return (
    <Example
      exampleCode="<ColoredText>Put together</ColoredText>"
      before={readFileSync(
        __dirname + '../../../../examples/dist/jsx/styled-string.js',
        'utf-8'
      )}
      after={readFileSync(
        __dirname + '../../../../examples/dist/js/styled-string.js',
        'utf-8'
      )}>
      <styled.StyledString>Put together</styled.StyledString>
    </Example>
  );
};

export const StyledDynamic = () => {
  return (
    <Example
      exampleCode="<EmphasisText primary>Make up</EmphasisText>"
      before={readFileSync(
        __dirname + '../../../../examples/dist/jsx/styled-dynamic-decl.js',
        'utf-8'
      )}
      after={readFileSync(
        __dirname + '../../../../examples/dist/js/styled-dynamic-decl.js',
        'utf-8'
      )}>
      <styled.StyledDynamic primary>Make up</styled.StyledDynamic>
    </Example>
  );
};

export const StyledTransientProps = () => {
  return (
    <Example
      exampleCode={
        '<TransientProps $color="red" color="black">Collate</TransientProps>'
      }
      before={readFileSync(
        __dirname + '../../../../examples/dist/jsx/styled-transient-props.js',
        'utf-8'
      )}
      after={readFileSync(
        __dirname + '../../../../examples/dist/js/styled-transient-props.js',
        'utf-8'
      )}>
      <styled.TransientProps $color="red" color="black">
        Collate
      </styled.TransientProps>
    </Example>
  );
};

export const StyledAsProp = () => {
  return (
    <Example
      exampleCode={'<Heading as="span">Marshal</Heading>'}
      before={readFileSync(
        __dirname + '../../../../examples/dist/jsx/styled-as-prop.js',
        'utf-8'
      )}
      after={readFileSync(
        __dirname + '../../../../examples/dist/js/styled-as-prop.js',
        'utf-8'
      )}>
      <styled.StyledAsProp as="span">Marshal</styled.StyledAsProp>
    </Example>
  );
};

export const StyledComposition = () => {
  return (
    <Example
      exampleCode={'<BlueText>This text is blue</BlueText>'}
      before={readFileSync(
        __dirname + '../../../../examples/dist/jsx/styled-composition.js',
        'utf-8'
      )}
      after={readFileSync(
        __dirname + '../../../../examples/dist/js/styled-composition.js',
        'utf-8'
      )}>
      <styled.StyledComposition>This text is blue</styled.StyledComposition>
    </Example>
  );
};
