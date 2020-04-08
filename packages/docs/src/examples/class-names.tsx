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
        The Fountain of Bakhchisaray <i>(hover over me)</i>
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
            The Bronze Horseman <i>(hover over me)</i>
          </div>
        )}
      </classNames.ZoomOnHoverCAF>
    </Example>
  );
};

export const ClassNamesDynamicExample = () => {
  return (
    <Example
      before={readFileSync(
        __dirname + '../../../../examples/src/class-names-dynamic.tsx',
        'utf-8'
      )}
      after={readFileSync(
        __dirname + '../../../../examples/dist/class-names-dynamic.jsx',
        'utf-8'
      )}>
      <classNames.Dynamic color="blue">Eugene Onegin</classNames.Dynamic>
    </Example>
  );
};
