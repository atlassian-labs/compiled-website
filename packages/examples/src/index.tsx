import { ColoredText as StyledString } from './styled-string';
import { Button as StyledButton } from './styled-button';
import { EmphasisText as StyledDynamic } from './styled-dynamic-decl';
import { ColoredText as StyledObj } from './styled-obj';
import { TransientProps } from './styled-transient-props';
import { BlueText as StyledComposition } from './styled-composition';
import { Button as CssPropButton } from './css-prop-button';
import { EmphasisText as CssPropString } from './css-prop-string';
import { EmphasisText as CssPropObj } from './css-prop-obj';
import { CompositionMultiple } from './css-prop-composition-multiple';
import { CompositionIdentifier } from './css-prop-composition-identifier';
import { Heading as StyledAsProp } from './styled-as-prop';
import { EmphasisText as CssPropDynamic } from './css-prop-dynamic-decl';
import { CustomColorText as CssPropCompositionCorrect } from './css-prop-composition-correct';
import { CustomColorText as CssPropCompositionIncorrect } from './css-prop-composition-incorrect';
import { CustomColorText as CssPropCompositionNoStyle } from './css-prop-composition-no-style';
import { Button as ClassNamesButton } from './class-names-button';
import { EmphasisText as ClassNamesObj } from './class-names-obj';
import { EmphasisText as ClassNamesDynamic } from './class-names-dynamic';
import { CustomColorText as ClassNamesComposition } from './class-names-composition';

export const styled = {
  Button: StyledButton,
  StyledString,
  StyledObj,
  StyledDynamic,
  TransientProps,
  StyledComposition,
  StyledAsProp,
};

export const cssProp = {
  Button: CssPropButton,
  CssPropObj,
  CssPropString,
  CssPropDynamic,
  CssPropCompositionCorrect,
  CssPropCompositionIncorrect,
  CssPropCompositionNoStyle,
};

export const classNames = {
  Button: ClassNamesButton,
  ClassNamesObj,
  ClassNamesDynamic,
  ClassNamesComposition,
};

export const composition = {
  CompositionMultiple,
  CompositionIdentifier,
};
