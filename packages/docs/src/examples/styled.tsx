import React from 'react';
import { readFileSync } from 'fs';
import { styled } from '@compiled/website-examples';
import { Example } from './example';

export const StyledExample = () => {
  return (
    <Example
      before={readFileSync(
        __dirname + '../../../../examples/dist/jsx/styled.js',
        'utf-8'
      )}
      after={readFileSync(
        __dirname + '../../../../examples/dist/js/styled.js',
        'utf-8'
      )}>
      <styled.ColoredText color="#FF5630">
        The Road Not Taken
      </styled.ColoredText>
    </Example>
  );
};

export const StyledInvalidExample = () => {
  return (
    <Example
      before={readFileSync(
        __dirname + '../../../../examples/dist/jsx/styled-invalid.js',
        'utf-8'
      )}
      after={readFileSync(
        __dirname + '../../../../examples/dist/js/styled-invalid.js',
        'utf-8'
      )}>
      <styled.EmphasisText massive>Ode to a Nightingale</styled.EmphasisText>
    </Example>
  );
};

export const StyledObjectExample = () => {
  return (
    <Example
      before={readFileSync(
        __dirname + '../../../../examples/dist/jsx/styled-object.js',
        'utf-8'
      )}
      after={readFileSync(
        __dirname + '../../../../examples/dist/js/styled-object.js',
        'utf-8'
      )}>
      <styled.EmphasisText massive>Ode to a Nightingale</styled.EmphasisText>
    </Example>
  );
};

export const StyledTransientProps = () => {
  return (
    <Example
      before={readFileSync(
        __dirname + '../../../../examples/dist/jsx/styled-transient-props.js',
        'utf-8'
      )}
      after={readFileSync(
        __dirname + '../../../../examples/dist/js/styled-transient-props.js',
        'utf-8'
      )}>
      <styled.TransientProps $color="red" color="black">
        Graf Nulin
      </styled.TransientProps>
    </Example>
  );
};
