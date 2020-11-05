import React from 'react';
import '@compiled/core';

export const Button = ({ children, variant }) => {
  const bgColor = variant === 'primary' ? '#6554C0' : '#DFE1E6';
  const activeBgColor = variant === 'primary' ? '#5243AA' : '#DFE1E6';
  const hoverBgColor = variant === 'primary' ? '#8777D9' : '#DFE1E6';
  const fontColor = variant === 'primary' ? '#fff' : '#DFE1E6';

  return (
    <button
      type="button"
      css={{
        border: 'none',
        borderRadius: 3,
        padding: '8px 10px',
        backgroundColor: bgColor,
        color: fontColor,
        fontWeight: 400,
        fontFamily: 'inherit',
        fontSize: 14,
        ':hover': {
          backgroundColor: hoverBgColor,
        },
        ':active': {
          backgroundColor: activeBgColor,
        },
      }}>
      {children}
    </button>
  );
};
