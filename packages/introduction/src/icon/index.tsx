/** @jsx jsx */
import { jsx } from '@compiled/css-in-js';
import Github from './github.svg';
import Npm from './npm.svg';

interface IconProps {
  name: keyof typeof iconMap;
}

const iconMap = {
  github: Github,
  npm: Npm,
};

export const Icon = (props: IconProps) => {
  const Svg = iconMap[props.name];

  return (
    <span css={{ display: 'inline-block', width: '4rem', height: '4rem' }}>
      <Svg />
    </span>
  );
};
