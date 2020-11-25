import * as React from 'react';
import { ClassNames } from '@emotion/core';

const EmphasisText = ({ className, children, style: styl }: any) => (
  <ClassNames>
    {({ css }) => (
      <span
        style={styl}
        className={
          css({
            color: '#00b8d9',
            textTransform: 'uppercase',
            fontWeight: 700,
          }) +
          ' ' +
          className
        }>
        {children}
      </span>
    )}
  </ClassNames>
);

export const CustomColorText = (props) => (
  <EmphasisText css={{ color: props.color }}>{props.children}</EmphasisText>
);
