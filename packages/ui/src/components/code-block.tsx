import React, { CSSProperties } from 'react';
import '@compiled/core';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism-async';
import codeTheme from 'react-syntax-highlighter/dist/esm/styles/prism/tomorrow';
import { codeBackground } from '../utils/colors';

interface CodeBlockProps {
  children: string;
  className?: string;
  language?: string;
  style?: CSSProperties;
  variant?: 'sharp' | 'rounded';
}

export const CodeBlock = ({
  children,
  language = 'jsx',
  variant = 'rounded',
  className,
  style,
  ...props
}: CodeBlockProps) => (
  <div
    css={{
      fontSize: '2rem',
      backgroundColor: 'rgb(45, 45, 45)',
      boxShadow:
        'rgba(9, 30, 66, 0.25) 0px 12px 24px -6px, rgba(9, 30, 66, 0.31) 0px 0px 1px',
      opacity: 0.9,
      borderRadius: variant === 'sharp' ? 0 : '5px',
      overflow: 'auto',
      display: 'flex',
      position: 'relative',
    }}
    className={className}
    style={style}
    {...props}>
    <SyntaxHighlighter
      language={language}
      style={codeTheme}
      customStyle={{ padding: 0, overflow: 'visible', margin: '2rem' }}>
      {children.replace(/^\n/, '').replace(/\n$/, '')}
    </SyntaxHighlighter>
    {/* Add spacing because padding is eliminated with overflow: visible */}
    <div css={{ width: '1px', flexShrink: 0 }} />
  </div>
);

export const Terminal = ({ children }: CodeBlockProps) => {
  const parsedInput = children.replace(/^\n/, '');

  return (
    <div
      css={{
        padding: '2.5rem 0',
        pre: {
          margin: '0 !important',
          padding: '0 !important',
        },
      }}>
      <pre>
        <code
          css={{
            color: 'rgba(255, 255, 255, 0.99)',
            fontSize: '16px',
            fontFamily: `'SFMono-Medium', 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', 'Ubuntu Mono', Menlo, Consolas, Courier, monospace`,
            position: 'relative',
            opacity: 0.9,
            '@keyframes blink': {
              '0%': {
                opacity: 1,
              },
              '100%': {
                opacity: 0,
              },
            },
            ':before': {
              content: '➜  ~ ',
              color: '#79F2C0',
              pointerEvents: 'none',
              position: 'absolute',
              left: -50,
            },
            ':after': {
              content: '',
              display: 'block',
              position: 'absolute',
              backgroundColor: 'currentColor',
              width: 12,
              height: 28,
              top: '-3px',
              right: '-13px ',
              pointerEvents: 'none',
              animation: 'blink 2s steps(2, end) infinite',
            },
          }}>
          {parsedInput}
        </code>
      </pre>
    </div>
  );
};
