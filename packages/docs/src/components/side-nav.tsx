import React, { cloneElement, Children } from 'react';
import { styled } from '@compiled/css-in-js';
import { VerticalStack, Heading, colors } from '@compiled/website-ui';
import { NavLink } from 'react-router-dom';

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

// TODO: Change this to either compposed styled or css prop when transformer supports it.
const StyledLink = styled.div`
  > a {
    display: block;
    font-weight: 500;
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
      padding-left: 1rem;
      margin-left: -1.375rem;
    }
  }
`;

export const LinkItem = ({ children, href }: { children: React.ReactNode; href: string }) => {
  return (
    <StyledLink>
      <NavLink activeClassName="" to={href}>
        {children}
      </NavLink>
    </StyledLink>
  );
};
