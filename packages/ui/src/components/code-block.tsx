/** @jsx jsx */
import { useEffect, useState, CSSProperties } from 'react';
import { jsx } from '@compiled/css-in-js';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { okaidia } from 'react-syntax-highlighter/styles/prism';
import { codeBackground } from '../utils/colors';
import { ScreenReaderText } from './helpers';

interface CodeBlockProps {
  children: string;
  className?: string;
  language?: string;
  style?: CSSProperties;
}

export const CodeBlock = ({
  children,
  language = 'tsx',
  ...props
}: CodeBlockProps) => (
  <div
    css={{
      fontSize: '2rem',
      backgroundColor: codeBackground,
      boxShadow:
        'rgba(9, 30, 66, 0.25) 0px 12px 24px -6px, rgba(9, 30, 66, 0.31) 0px 0px 1px',
      opacity: 0.9,
      borderRadius: 5,
      overflow: 'auto',
      display: 'flex',
      position: 'relative',
    }}
    {...props}>
    <SyntaxHighlighter
      language={language}
      style={okaidia}
      customStyle={{ padding: 0, overflow: 'visible', margin: '2rem' }}>
      {children.replace(/^\n/, '').replace(/\n$/, '')}
    </SyntaxHighlighter>
    {/* Add spacing because padding is eliminated with overflow: visible */}
    <div css={{ width: '1px', flexShrink: 0 }} />
  </div>
);

export const Terminal = ({ children }: CodeBlockProps) => {
  const parsedInput = children.replace(/^\n/, '');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let intervalId;
    const timeoutId = setTimeout(() => {
      setInterval(() => {
        if (parsedInput.length !== index) {
          setIndex((prev) => prev + 1);
        }
      }, 40);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [parsedInput]);

  return (
    <div
      css={{
        padding: '3rem 0',
        pre: {
          margin: '0 !important',
          padding: '0 !important',
        },
      }}>
      <pre>
        <code
          css={{
            // @ts-ignore
            position: 'relative',
            // @ts-ignore
            opacity: 0.9,
            // @ts-ignore
            '@keyframes blink': {
              // @ts-ignore
              '0%': {
                opacity: 0,
              },
              '40%': {
                opacity: 1,
              },
              '100%': {
                opacity: 1,
              },
            },
            ':before': {
              content: '➜ ',
              color: 'rgba(170, 255, 0, 0.9)',
              pointerEvents: 'none',
            },
            ':after': {
              content: '',
              display: 'block',
              position: 'absolute',
              backgroundColor: 'currentColor',
              width: 12,
              height: 28,
              top: '-3px',
              right: '-10px ',
              pointerEvents: 'none',
              animation: 'blink 3s infinite',
            },
          }}>
          <ScreenReaderText>{parsedInput}</ScreenReaderText>
          <span aria-hidden="true">{parsedInput.slice(0, index)}</span>
        </code>
      </pre>
    </div>
  );
};
