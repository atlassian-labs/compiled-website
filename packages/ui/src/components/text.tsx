import React from 'react';
import type { ReactNode } from 'react';
import '@compiled/react';

interface TextProps {
  children: ReactNode;
  variant?: 'reading' | 'aside' | 'supplementary';
  weight?: 'regular' | 'bold';
  as?: 'p' | 'span' | 'li' | 'div';
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
        weight === 'bold' && `font-weight: 500;`,
        `
          font-family: 'Roboto', sans-serif;

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
            line-height: 30px;
            padding: 0.05px 0;

            ::before {
              margin-top: -0.3834em;
            }

            ::after {
              margin-top: -0.3834em;
            }
          }

          &[data-variant='aside'] {
            font-size: 14px;
            line-height: 21px;
            padding: 0.05px 0;

            ::before {
              margin-top: -0.3844em;
            }

            ::after {
              margin-bottom: -0.4118em;
            }
          }

          &[data-variant='supplementary'] {
            font-size: 12px;
            line-height: 18px;
            padding: 0.05px 0;

            ::before {
              margin-top: -0.385em;
            }

            ::after {
              margin-bottom: -0.4124em;
            }
          }
        `,
      ]}>
      {children}
    </Component>
  );
}
