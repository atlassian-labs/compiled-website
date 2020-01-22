/** @jsx jsx */
import React from 'react';
import { jsx } from '@compiled/css-in-js';

interface TypographyProps {
  as: 'h1' | 'h2' | 'h3' | 'p' | 'small' | 'strong' | 'em';
  children: string;
}

export const Typography = ({ children, as: As }: TypographyProps) => {
  return (
    <As
      css={`
        h1& {
          font-size: 5rem;
        }

        h2& {
          font-size: 4rem;
        }

        h3& {
          font-size: 4rem;
        }

        small {
          font-size: 1rem;
        }

        strong {
          font-weight: 500;
        }

        em {
          font-style: italic;
        }
      `}>
      {children}
    </As>
  );
};
