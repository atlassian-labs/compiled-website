/** @jsxImportSource @compiled/react */

export const Lozenge = (props) => (
  <span
    css={[
      props.primary && {
        border: '3px solid pink',
        color: 'pink',
      },
      !props.primary && {
        border: '3px solid blue',
        color: 'blue',
      },
      {
        padding: '4px 8px',
        fontWeight: 600,
        borderRadius: 3,
      },
    ]}>
    {props.children}
  </span>
);
