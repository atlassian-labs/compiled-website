import * as React from 'react';
import '@compiled/react';
import { Text } from './text';
import { primary, textLight } from '../utils/colors';

export function Lozenge({ children }: { children: string }) {
  return (
    <span
      css={{
        display: 'inline-block',
        backgroundColor: primary,
        color: textLight,
        padding: '4px 6px',
        borderRadius: 3,
        textTransform: 'uppercase',
        lineHeight: 0,
      }}>
      <Text weight="bold" variant="supplementary">
        {children}
      </Text>
    </span>
  );
}
