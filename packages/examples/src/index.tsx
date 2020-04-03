import { ColoredText } from './styled';
import { EmphasisText } from './styled-invalid';
import { EmphasisText as EmphasisTextCssProp } from './css-prop';
import { EmphasisText as EmphasisTextCssPropString } from './css-prop-string';

export const styled = {
  ColoredText,
  EmphasisText,
};

export const cssProp = {
  EmphasisText: EmphasisTextCssProp,
  EmphasisTextString: EmphasisTextCssPropString,
};
