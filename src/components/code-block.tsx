/** @jsx jsx */
import { jsx } from '@compiled/css-in-js';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/styles/hljs';
import { codeBackground } from '../utils/colors';

export const CodeBlock = (props: { children: string; className?: string; language?: string }) => (
  <div
    className={props.className}
    css={{
      fontSize: '2rem',
      backgroundColor: codeBackground,
      padding: '2rem',
      overflow: 'hidden',
      pre: {
        margin: 0,
        padding: '0 !important',
      },
    }}>
    <SyntaxHighlighter language={props.language || 'typescriptreact'} style={monokai}>
      {props.children.replace(/^\n/, '')}
    </SyntaxHighlighter>
  </div>
);
