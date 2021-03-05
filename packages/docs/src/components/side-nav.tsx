import React, { cloneElement, Children } from 'react';
import { styled } from '@compiled/react';
import { VerticalStack, Heading, colors, Text } from '@compiled/website-ui';
import { Link } from 'react-router-dom';

interface SectionProps {
  children: React.ReactNode;
  title: string;
}

export const Section = ({ children, title }: SectionProps) => {
  const id = `section--${title.toLowerCase().split(' ').join('-')}`;

  return (
    <VerticalStack gap={1} spacing={6}>
      <Heading id={id} as="div" look="h500">
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
  user-select: none;
  color: currentColor;
  text-decoration: none;

  :hover,
  :focus {
    cursor: pointer;
    color: ${colors.primary};
  }

  :active {
    opacity: 0.8;
  }

  &[aria-current='page'] {
    color: ${colors.primary};
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
      <Text variant="aside">{children}</Text>
    </StyledLink>
  );
};
