import React from 'react';
import { readFileSync } from 'fs';
import { classNames } from '@compiled/website-examples';
import { Example } from '@compiled/website-ui';

export const ClassNamesExample = () => {
  return (
    <Example
      before={readFileSync(
        __dirname + '../../../../examples/dist/jsx/class-names.js',
        'utf-8'
      )}
      after={readFileSync(
        __dirname + '../../../../examples/dist/js/class-names.js',
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
        __dirname + '../../../../examples/dist/jsx/class-names-caf.js',
        'utf-8'
      )}
      after={readFileSync(
        __dirname + '../../../../examples/dist/js/class-names-caf.js',
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
        __dirname + '../../../../examples/dist/jsx/class-names-dynamic.js',
        'utf-8'
      )}
      after={readFileSync(
        __dirname + '../../../../examples/dist/js/class-names-dynamic.js',
        'utf-8'
      )}>
      <classNames.Dynamic color="blue">Eugene Onegin</classNames.Dynamic>
    </Example>
  );
};
