import React from 'react';
import '@compiled/react';

interface TextProps {
  children: string;
}

export function Text({ children }: TextProps) {
  return (
    <span
      css={`
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
      `}>
      {children}
    </span>
  );
}
