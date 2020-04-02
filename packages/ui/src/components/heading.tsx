/** @jsx jsx */
import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { jsx } from '@compiled/css-in-js';

interface HeadingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  look: 'h500' | 'h400' | 'h300' | 'h200' | 'h100';
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  children: ReactNode;
}

const headingMap = {
  h900: 'h1',
  h800: 'h2',
  h700: 'h3',
  h600: 'h4',
  h500: 'h5',
  h400: 'h6',
  h300: 'h6',
  h200: 'h6',
  h100: 'h6',
} as const;

export const Heading = ({ children, ...props }: HeadingProps) => {
  const As = props.as || headingMap[props.look];

  return (
    <As
      data-look={props.look}
      css={`
        font-family: 'Charlie Display';
        font-weight: 500;
        margin: 0;
        opacity: 0.9;

        [data-look='h100']& {
          font-size: 52px;
          line-height: 60px;
        }

        [data-look='h200']& {
          font-size: 36px;
          line-height: 44px;
        }

        [data-look='h300']& {
          font-weight: 500;
          font-size: 24px;
          line-height: 32px;
          letter-spacing: 0.3px;
        }

        [data-look='h600']& {
          font-size: 20px;
          line-height: 24px;
          letter-spacing: 0.3px;
        }

        [data-look='h400']& {
          font-weight: 500;
          font-size: 14px;
          line-height: 20px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        [data-look='h500']& {
          font-size: 12px;
          line-height: 18px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
      `}>
      {children}
    </As>
  );
};
