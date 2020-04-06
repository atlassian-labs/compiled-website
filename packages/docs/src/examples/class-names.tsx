import React from 'react';
import { readFileSync } from 'fs';
import { classNames } from '@compiled/website-examples';
import { Example } from './example';

export const ClassNamesExample = () => {
  return (
    <Example
      before={readFileSync(
        __dirname + '../../../../examples/src/class-names.tsx',
        'utf-8'
      )}
      after={readFileSync(
        __dirname + '../../../../examples/dist/class-names.jsx',
        'utf-8'
      )}>
      <classNames.ZoomOnHover>
        I Wandered Lonely as a Cloud <i>(hover over me)</i>
      </classNames.ZoomOnHover>
    </Example>
  );
};

export const ClassNamesCafExample = () => {
  return (
    <Example
      before={readFileSync(
        __dirname + '../../../../examples/src/class-names-caf.tsx',
        'utf-8'
      )}
      after={readFileSync(
        __dirname + '../../../../examples/dist/class-names-caf.jsx',
        'utf-8'
      )}>
      <classNames.ZoomOnHoverCAF>
        {(props) => (
          <div {...props}>
            I Wandered Lonely as a Cloud <i>(hover over me)</i>
          </div>
        )}
      </classNames.ZoomOnHoverCAF>
    </Example>
  );
};
