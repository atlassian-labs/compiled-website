import React from 'react';
import { RootLayout, VerticalStack } from '@compiled/website-ui';
import { Styled } from './styled';
import { LinkItem, Section } from '../components/side-nav';

export const App = () => {
  return (
    <RootLayout
      sidenav={
        <>
          <Section title="Getting started">
            <LinkItem>Installation</LinkItem>
            <LinkItem>Styled components</LinkItem>
            <LinkItem>Css prop</LinkItem>
            <LinkItem>Object styles</LinkItem>
            <LinkItem>Media queries</LinkItem>
            <LinkItem>Testing</LinkItem>
          </Section>
          <Section title="Advanced">
            <LinkItem>Class names</LinkItem>
            <LinkItem>Attaching props</LinkItem>
            <LinkItem>Server side rendering</LinkItem>
            <LinkItem>TypeScript</LinkItem>
          </Section>
          <Section title="Packages">
            <LinkItem>@compiled/css-in-js</LinkItem>
            <LinkItem>@compiled/ts-transform-css-in-js</LinkItem>
            <LinkItem>@compiled/babel-plugin-css-in-js</LinkItem>
            <LinkItem>@compiled/jest-css-in-js</LinkItem>
          </Section>
        </>
      }>
      <VerticalStack spacing={4}>
        <Styled />
      </VerticalStack>
    </RootLayout>
  );
};
