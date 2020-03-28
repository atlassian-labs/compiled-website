/** @jsx jsx */
import { jsx } from '@compiled/css-in-js';
import { CodeBlock } from './code-block';

interface ComparisonProps {
  before: string;
  after: string;
}

export const Comparison = (props: ComparisonProps) => {
  return (
    <div
      css={{
        display: 'flex',
        alignItems: 'stretch',
        pre: {
          height: '100%',
        },
      }}>
      <CodeBlock>{props.before}</CodeBlock>
      <CodeBlock>{props.after}</CodeBlock>
    </div>
  );
};
