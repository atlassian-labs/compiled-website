import React from 'react';
import type { ReactNode } from 'react';
import '@compiled/react';

interface TextProps {
  children: ReactNode;
  variant?: 'reading' | 'aside' | 'supplementary';
}

export function Text({ children, variant = 'reading' }: TextProps) {
  return (
    <span
      data-variant={variant}
      css={`
        font-weight: 300;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
          'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
          sans-serif;

        &[data-variant='reading'] {
          font-size: 20px;
          line-height: 28.1602px;
          padding: 0.05px 0;

          ::before {
            content: '';
            margin-top: -0.3701em;
            display: block;
            height: 0;
          }

          ::after {
            content: '';
            margin-bottom: -0.3349em;
            display: block;
            height: 0;
          }
        }

        &[data-variant='aside'] {
          font-size: 14px;
        }

        &[data-variant='supplementary'] {
          font-size: 12px;
        }
      `}>
      {children}
    </span>
  );
}
