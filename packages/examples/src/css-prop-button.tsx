import React from 'react';
import '@compiled/core';

export const Button = ({ children, variant }) => {
  const bgColor = variant === 'primary' ? '#6554C0' : 'rgba(9, 30, 66, 0.04)';
  const activeBgColor =
    variant === 'primary' ? '#5243AA' : 'rgba(179, 212, 255, 0.6)';
  const hoverBgColor =
    variant === 'primary' ? '#8777D9' : 'rgba(9, 30, 66, 0.08)';
  const fontColor = variant === 'primary' ? '#fff' : 'rgb(66, 82, 110)';

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
