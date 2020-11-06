import { styled } from '@compiled/core';

const getBgColor = (variant) =>
  variant === 'primary' ? '#6554C0' : 'rgba(9, 30, 66, 0.04)';
const getActiveBgColor = (variant) =>
  variant === 'primary' ? '#5243AA' : 'rgba(179, 212, 255, 0.6)';
const getHoverBgColor = (variant) =>
  variant === 'primary' ? '#8777D9' : 'rgba(9, 30, 66, 0.08)';
const getFontColor = (variant) =>
  variant === 'primary' ? '#fff' : 'rgb(66, 82, 110)';

export const Button = styled.button<{ variant: 'primary' | 'default' }>`
  border: none;
  border-radius: 3px;
  padding: 8px 10px;
  background-color: ${(props) => getBgColor(props.variant)};
  color: ${(props) => getFontColor(props.variant)};
  font-weight: 400;
  font-family: inherit;
  font-size: 14px;

  :hover {
    background-color: ${(props) => getHoverBgColor(props.variant)};
  }

  :active {
    background-color: ${(props) => getActiveBgColor(props.variant)};
  }
`;
