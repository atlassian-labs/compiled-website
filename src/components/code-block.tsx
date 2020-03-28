/** @jsx jsx */
import { jsx } from '@compiled/css-in-js';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { light } from 'react-syntax-highlighter/styles/prism';
import { codeBackground } from '../utils/colors';

export const CodeBlock = (props: { children: string; className?: string }) => (
  <pre
    className={props.className}
    css={{ backgroundColor: codeBackground, padding: '2rem', margin: '1rem' }}>
    <code
      css={{
        fontSize: '2rem',
        fontFamily:
          "'SFMono-Medium', 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', 'Ubuntu Mono', Menlo, Consolas, Courier, monospace`",
      }}>
      <SyntaxHighlighter language="tsx" style={light}>
        {props.children.replace(/^\n/, '')}
      </SyntaxHighlighter>
    </code>
  </pre>
);
