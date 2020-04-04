import { ColoredText } from './styled';
import { EmphasisText } from './styled-invalid';
import { EmphasisText as EmphasisTextCssProp } from './css-prop';
import { EmphasisText as EmphasisTextCssPropString } from './css-prop-string';
import { ZoomOnHover } from './class-names';
import { StylusBuiltInFunctions } from './stylus-built-in-functions';

export const styled = {
  ColoredText,
  EmphasisText,
};

export const cssProp = {
  EmphasisText: EmphasisTextCssProp,
  EmphasisTextString: EmphasisTextCssPropString,
};

export const classNames = {
  ZoomOnHover,
};

export const stylus = {
  StylusBuiltInFunctions,
};
