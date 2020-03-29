/** @jsx jsx */
import { jsx } from '@compiled/css-in-js';
import Github from './github.svg';

interface IconProps {
  name: 'string';
}

export const Icon = ({ name }: IconProps) => {
  return (
    <span css={{ display: 'inline-block', width: '4rem', height: '4rem' }}>
      <Github />
    </span>
  );
};
