import React from 'react';
import { RootLayout, VerticalStack, Heading, CodeBlock } from '@compiled/website-ui';
import { MDXProvider, MDXProviderComponentsProp } from '@mdx-js/react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { LinkItem, Section } from '../components/side-nav';
import pages from '../pages/*/*.mdx';

const components: MDXProviderComponentsProp = {
  h1: ({ children }) => <Heading look="h100">{children}</Heading>,
  h2: ({ children }) => <Heading look="h200">{children}</Heading>,
  h3: ({ children }) => <Heading look="h300">{children}</Heading>,
  h4: ({ children }) => <Heading look="h400">{children}</Heading>,
  h5: ({ children }) => <Heading look="h500">{children}</Heading>,
  h6: ({ children }) => <Heading look="h500">{children}</Heading>,
  p: ({ children }) => <VerticalStack spacing={2}>{children}</VerticalStack>,
  code: ({ children, className }) => (
    <VerticalStack spacing={8}>
      <CodeBlock language={className.split('-')[0]}>{children}</CodeBlock>
    </VerticalStack>
  ),
};

const titleCase = (str: string) => {
  const parsedStr = str.replace(/\d+-/, '');
  return `${parsedStr[0].toUpperCase()}${parsedStr.slice(1).toLowerCase().split('-').join(' ')}`;
};

export const App = () => {
  return (
    <BrowserRouter basename={'/docs'}>
      <RootLayout
        sidenav={Object.entries(pages as any)
          .sort()
          .map(([sectionName, pages]) => (
            <Section key={sectionName} title={titleCase(sectionName)}>
              {Object.entries(pages as any)
                .sort()
                .map(([pageName]) => (
                  <LinkItem href={`/${sectionName}/${pageName}`} key={pageName}>
                    {titleCase(pageName)}
                  </LinkItem>
                ))}
            </Section>
          ))}>
        <MDXProvider components={components}>
          <Route>
            {({ location }) => {
              const [section, page] = location.pathname.split('/').filter(Boolean);
              let element: JSX.Element;
              if (pages[section] && pages[section][page] && pages[section][page].default) {
                const Page = pages[section][page].default;
                element = <Page />;
              } else {
                const defaultSection = Object.keys(pages)[0];
                const defaultPage = Object.keys(pages[defaultSection])[0];
                element = <Redirect to={`/${defaultSection}/${defaultPage}`} />;
              }

              return element;
            }}
          </Route>
        </MDXProvider>
      </RootLayout>
    </BrowserRouter>
  );
};
