import * as React from 'react';
import '@compiled/react';
import { Text } from './text';

export function Lozenge({ children }: { children: string }) {
  return (
    <span
      css={{
        display: 'inline-block',
        backgroundColor: '#DEEBFF',
        color: '#0747A6',
        padding: '4px 6px',
        borderRadius: 3,
        textTransform: 'uppercase',
      }}>
      <Text weight="bold" variant="supplementary">
        {children}
      </Text>
    </span>
  );
}
