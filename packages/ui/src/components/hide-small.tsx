import styled from '@emotion/styled';

export const HideSmall = styled.span`
  display: none;

  @media only screen and (min-width: 900px) {
    display: inline;
  }
`;
