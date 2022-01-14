/** @jsxImportSource @compiled/react */

export const LozengeArr = (props) => (
  <span
    css={[
      // Uncomment when the new version of the babel-plugin with conditional support is release
      // props.primary ? {
      //   border: '3px solid blue',
      // } : {
      //   border: '3px solid pink',
      // },
      props.color && {
        color: props.color,
      },
      !props.color && {
        color: 'pink',
      },
      {
        padding: '4px 8px',
        fontWeight :600,
        borderRadius: 3,
      },
    ]}>
    {props.children}
  </span>
);

export const LozengeObj = (props) => (
  <span
    css={{
      border: props.primary ? '3px solid blue' : '3px solid pink',
      color: props.color ? props.color : 'pink',

      padding: '4px 8px',
      fontWeight :600,
      borderRadius: 3,
    }}>
    {props.children}
  </span>
);

export const LozengeStr = (props) => (
  <span
    css={`
      border: ${props.primary ? '3px solid blue' : '3px solid pink'};
      color: ${props.color ? props.color : 'pink'};

      padding: 4px 8px;
      font-weight :600;
      border-radius: 3px;
    `}>
    {props.children}
  </span>
);
