import { styled } from '@compiled/react';

export const Button = styled.button`
  border: none;
  border-radius: 3px;
  padding: 8px 10px;
  background-color: #6554c0;
  color: #fff;
  font-weight: 400;
  font-family: arial;
  font-size: 14px;

  :hover {
    background-color: #8777d9;
  }

  :active {
    background-color: #5243aa;
  }
`;
