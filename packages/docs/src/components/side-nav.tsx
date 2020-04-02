import React from 'react';
import { styled } from '@compiled/css-in-js';
import { VerticalStack, Heading, colors } from '@compiled/website-ui';

interface SectionProps {
  children: React.ReactNode;
  title: string;
}

export const Section = ({ children, title }: SectionProps) => (
  <VerticalStack spacing={4}>
    <Heading as="span" look="h400">
      {title}
    </Heading>
    {children}
  </VerticalStack>
);

export const LinkItem = styled.a`
  display: block;
  font-weight: 500;
  padding: 0.5rem 0;
  user-select: none;

  :hover {
    cursor: pointer;
    color: ${() => colors.primary};
  }

  :active {
    opacity: 0.8;
  }
`;
