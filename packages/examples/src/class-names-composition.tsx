import * as React from 'react';
import { ClassNames } from '@compiled/react';

const EmphasisText = ({ className, children, style }: any) => (
  <ClassNames>
    {({ css }) => (
      <span
        style={style}
        className={`${css({
          color: '#00b8d9',
          textTransform: 'uppercase',
          fontWeight: 700,
        })} ${className}`}>
        {children}
      </span>
    )}
  </ClassNames>
);

export const CustomColorText = (props) => (
  <EmphasisText css={{ color: props.color }}>{props.children}</EmphasisText>
);
