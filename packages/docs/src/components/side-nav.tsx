import React, { cloneElement, Children } from 'react';
import { styled } from '@compiled/css-in-js';
import { VerticalStack, Heading, colors } from '@compiled/website-ui';
import { Link } from 'react-router-dom';

interface SectionProps {
  children: React.ReactNode;
  title: string;
}

export const Section = ({ children, title }: SectionProps) => {
  const id = `section--${title.toLowerCase().split(' ').join('-')}`;

  return (
    <VerticalStack spacing={6}>
      <Heading id={id} as="span" look="h400">
        {title}
      </Heading>
      {Children.map(children, (child) =>
        cloneElement(child as JSX.Element, { 'aria-labelledby': id })
      )}
    </VerticalStack>
  );
};

const StyledLink = styled(Link)`
  display: block;
  padding: 0.5rem 0;
  user-select: none;
  color: currentColor;
  text-decoration: none;

  :hover {
    cursor: pointer;
    color: ${() => colors.primary};
  }

  :active {
    opacity: 0.8;
  }

  &[aria-current='page'] {
    border-left: 0.375rem solid #7ab2c8;
    padding-left: 2rem;
    margin-left: -2.375rem;
  }
`;

export const LinkItem = ({
  children,
  href,
  ...props
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <StyledLink {...props} to={href}>
      {children}
    </StyledLink>
  );
};
