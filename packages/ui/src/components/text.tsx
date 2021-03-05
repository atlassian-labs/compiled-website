import React from 'react';
import type { ReactNode } from 'react';
import '@compiled/react';

interface TextProps {
  children: ReactNode;
  variant?: 'reading' | 'aside' | 'supplementary';
  weight?: 'regular' | 'bold';
  as?: 'p' | 'span' | 'li';
}

export function Text({
  children,
  as: Component = 'span',
  weight = 'regular',
  variant = 'reading',
}: TextProps) {
  return (
    <Component
      data-variant={variant}
      css={[
        weight === 'regular' && `font-weight: 300;`,
        weight === 'bold' && `font-weight: 600;`,
        `
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
            'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;

          ::before {
            content: '';
            display: block;
            height: 0;
          }

          ::after {
            content: '';
            display: block;
            height: 0;
          }

          &[data-variant='reading'] {
            font-size: 20px;
            line-height: 28.1602px;
            padding: 0.05px 0;

            ::before {
              margin-top: -0.3701em;
            }

            ::after {
              margin-bottom: -0.3349em;
            }
          }

          &[data-variant='aside'] {
            font-size: 14px;
            line-height: 21px;
            padding: 0.05px 0;

            ::before {
              margin-top: -0.413em;
            }

            ::after {
              margin-bottom: -0.3959em;
            }
          }

          &[data-variant='supplementary'] {
            font-size: 12px;
            line-height: 18px;
            padding: 0.05px 0;

            ::before {
              content: '';
              margin-top: -0.4136em;
              display: block;
              height: 0;
            }

            ::after {
              content: '';
              margin-bottom: -0.3965em;
              display: block;
              height: 0;
            }
          }
        `,
      ]}>
      {children}
    </Component>
  );
}
