/** @jsx jsx */
import { jsx } from '@compiled/css-in-js';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { okaidia } from 'react-syntax-highlighter/styles/prism';
import { codeBackground } from '../utils/colors';

interface CodeBlockProps {
  children: string;
  className?: string;
  language?: string;
  before?: string;
}

export const CodeBlock = ({ children, language = 'tsx', before, ...props }: CodeBlockProps) => (
  <div
    css={{
      fontSize: '2rem',
      backgroundColor: codeBackground,
      padding: '2rem',
      overflow: 'hidden',
      pre: {
        margin: '0 !important',
        padding: '0 !important',
      },
    }}
    {...props}>
    <SyntaxHighlighter language={language} style={okaidia}>
      {children.replace(/^\n/, '')}
    </SyntaxHighlighter>
  </div>
);
