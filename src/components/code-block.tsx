/** @jsx jsx */
import { useEffect, useState } from 'react';
import { jsx } from '@compiled/css-in-js';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { okaidia } from 'react-syntax-highlighter/styles/prism';
import { codeBackground } from '../utils/colors';
import { ScreenReaderText } from './helpers';

interface CodeBlockProps {
  children: string;
  className?: string;
  language?: string;
}

export const CodeBlock = ({ children, language = 'tsx', ...props }: CodeBlockProps) => (
  <div
    css={{
      fontSize: '2rem',
      backgroundColor: codeBackground,
      padding: '2rem',
      overflow: 'hidden',
      borderRadius: 3,
      pre: {
        margin: '0 !important',
        padding: '0 !important',
      },
    }}
    {...props}>
    <SyntaxHighlighter language={language} style={okaidia} customStyle={{ opacity: 0.9 }}>
      {children.replace(/^\n/, '')}
    </SyntaxHighlighter>
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
          setIndex(prev => prev + 1);
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
            position: 'relative',
            opacity: 0.9,
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
            },
          }}>
          <ScreenReaderText>{parsedInput}</ScreenReaderText>
          <span aria-hidden="true">{parsedInput.slice(0, index)}</span>
        </code>
      </pre>
    </div>
  );
};
