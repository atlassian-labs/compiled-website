import * as React from 'react';
import { ClassNames } from '@compiled/react';

export const Button = ({ children }) => {
  return (
    <ClassNames>
      {({ css }) =>
        children({
          className: css({
            border: 'none',
            borderRadius: 3,
            padding: '8px 10px',
            backgroundColor: '#6554C0',
            color: '#fff',
            fontWeight: 400,
            fontFamily: 'arial',
            fontSize: 14,
            ':hover': {
              backgroundColor: '#8777D9',
            },
            ':active': {
              backgroundColor: '#5243AA',
            },
          }),
        })
      }
    </ClassNames>
  );
};
