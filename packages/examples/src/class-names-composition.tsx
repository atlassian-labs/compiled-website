import * as React from 'react';
import { ClassNames } from '@compiled/react';

const EmphasisText = (props) => (
  <ClassNames>
    {({ css }) => (
      <span
        style={props.style}
        className={
          css({
            color: '#00b8d9',
            textTransform: 'uppercase',
            fontWeight: 700,
          }) +
          ' ' +
          props.className
        }>
        {props.children}
      </span>
    )}
  </ClassNames>
);

export const CustomColorText = (props) => (
  <EmphasisText css={{ color: props.color }}>{props.children}</EmphasisText>
);
