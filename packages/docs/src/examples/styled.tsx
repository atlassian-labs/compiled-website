import React from 'react';
import { styled } from '@compiled/website-examples';
import { Example } from '@compiled/website-ui';

export const StyledObj = () => {
  return (
    <Example
      exampleCode="<ColoredText>Assemble</ColoredText>"
      before={require('!!raw-loader!@compiled/website-examples/dist/jsx/styled-obj.js')}
      after={require('!!raw-loader!@compiled/website-examples/dist/js/styled-obj.js')}>
      <styled.StyledObj>Assemble</styled.StyledObj>
    </Example>
  );
};

export const StyledString = () => {
  return (
    <Example
      exampleCode="<ColoredText>Put together</ColoredText>"
      before={require('!!raw-loader!@compiled/website-examples/dist/jsx/styled-string.js')}
      after={require('!!raw-loader!@compiled/website-examples/dist/js/styled-string.js')}>
      <styled.StyledString>Put together</styled.StyledString>
    </Example>
  );
};

export const StyledDynamic = () => {
  return (
    <Example
      exampleCode="<EmphasisText primary>Make up</EmphasisText>"
      before={require('!!raw-loader!@compiled/website-examples/dist/jsx/styled-dynamic-decl.js')}
      after={require('!!raw-loader!@compiled/website-examples/dist/js/styled-dynamic-decl.js')}>
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
      before={require('!!raw-loader!@compiled/website-examples/dist/jsx/styled-transient-props.js')}
      after={require('!!raw-loader!@compiled/website-examples/dist/js/styled-transient-props.js')}>
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
      before={require('!!raw-loader!@compiled/website-examples/dist/jsx/styled-as-prop.js')}
      after={require('!!raw-loader!@compiled/website-examples/dist/js/styled-as-prop.js')}>
      <styled.StyledAsProp as="span">Marshal</styled.StyledAsProp>
    </Example>
  );
};

export const StyledComposition = () => {
  return (
    <Example
      exampleCode={'<BlueText>This text is blue</BlueText>'}
      before={require('!!raw-loader!@compiled/website-examples/dist/jsx/styled-composition.js')}
      after={require('!!raw-loader!@compiled/website-examples/dist/js/styled-composition.js')}>
      <styled.StyledComposition>This text is blue</styled.StyledComposition>
    </Example>
  );
};
