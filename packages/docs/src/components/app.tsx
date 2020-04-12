import { styled } from '@compiled/css-in-js';
import React from 'react';
import {
  RootLayout,
  VerticalStack,
  Heading,
  CodeBlock,
} from '@compiled/website-ui';
import { MDXProvider, MDXProviderComponentsProp } from '@mdx-js/react';
import { BrowserRouter, Route, Redirect, Link } from 'react-router-dom';
import { LinkItem, Section } from './side-nav';
import pages from '../pages/*/*.mdx';
import { Footer } from './footer';
import { ScrollTop } from './scroll-top';

const Hr = styled.hr`
  color: rgba(0, 0, 0, 0.1);
  margin: 6rem 0;
`;

const Quote = styled.blockquote`
  padding: 2rem 3rem;
  margin: 6rem -3rem;
  color: rgba(37, 56, 88, 0.7);
  border-left: 3px solid #7ab2c8;
  background-color: #7ab2c814;
  opacity: 0.9;

  p {
    margin: 0;
  }
`;

const Code = styled.code`
  font-size: 0.9em;
  margin-top: 20px;
  color: currentColor;
  font-weight: 400;
  background-color: rgba(117, 63, 131, 0.07);
  border-radius: 5px;
  margin: 0;
  padding: 0.2rem 0.325rem;
`;

const P = styled.p`
  margin: 3rem 0;

  & + h2 {
    margin-top: 6rem;
  }
`;

const components: MDXProviderComponentsProp = {
  h1: ({ children }) => <Heading look="h100">{children}</Heading>,
  h2: ({ children }) => <Heading look="h200">{children}</Heading>,
  h3: ({ children }) => <Heading look="h300">{children}</Heading>,
  h4: ({ children }) => <Heading look="h400">{children}</Heading>,
  h5: ({ children }) => <Heading look="h500">{children}</Heading>,
  p: ({ children }) => <P>{children}</P>,
  pre: ({ children }) => children,
  code: ({ children, className }) => (
    <VerticalStack spacing={2}>
      <CodeBlock language={className ? className.split('-')[1] : undefined}>
        {children}
      </CodeBlock>
    </VerticalStack>
  ),
  hr: () => <Hr />,
  inlineCode: ({ children }) => <Code>{children}</Code>,
  a: ({ href, children, ...props }) =>
    href.startsWith('http') ? (
      <a
        href={href}
        css={{ color: '#7ab2c8', textDecoration: 'none' }}
        target="_blank"
        rel="noopener noreferrer"
        {...props}>
        {children}
      </a>
    ) : (
      <Link
        to={href}
        css={{ color: '#7ab2c8', textDecoration: 'none' }}
        {...props}>
        {children}
      </Link>
    ),
  blockquote: (props) => <Quote {...props} />,
};

const titleCase = (str: string) => {
  const parsedStr = str.replace(/\d+-/, '');
  return `${parsedStr[0].toUpperCase()}${parsedStr
    .slice(1)
    .toLowerCase()
    .split('-')
    .join(' ')}`;
};

export const App = () => {
  return (
    <BrowserRouter basename={'/docs'}>
      <RootLayout
        sidenav={
          <>
            {Object.entries(pages as any)
              .sort()
              .map(([sectionName, pages]) => (
                <Section key={sectionName} title={titleCase(sectionName)}>
                  {Object.entries(pages as any)
                    .sort()
                    .map(([pageName]) => (
                      <LinkItem
                        href={`/${sectionName}/${pageName}`}
                        key={pageName}>
                        {titleCase(pageName)}
                      </LinkItem>
                    ))}
                </Section>
              ))}
            <Footer />
          </>
        }>
        <MDXProvider components={components}>
          <Route>
            {({ location }) => {
              const [section, page] = location.pathname
                .split('/')
                .filter(Boolean);
              let element: JSX.Element;
              if (
                pages[section] &&
                pages[section][page] &&
                pages[section][page].default
              ) {
                const Page = pages[section][page].default;

                // Code to figure out where we're going next
                const sectionPages = Object.keys(pages[section]).sort();
                const sections = Object.keys(pages).sort();
                const previousSectionKey =
                  sections[sections.indexOf(section) - 1];
                const nextSectionKey = sections[sections.indexOf(section) + 1];
                const previousPageKey =
                  sectionPages[sectionPages.indexOf(page) - 1];
                const nextPageKey =
                  sectionPages[sectionPages.indexOf(page) + 1];
                const nextSectionFirstPageKey =
                  pages[nextSectionKey] &&
                  Object.keys(pages[nextSectionKey]).sort()[0];
                const previousSectionLastPageKey =
                  pages[previousSectionKey] &&
                  Object.keys(pages[previousSectionKey]).sort()[
                    Object.keys(pages[previousSectionKey]).length - 1
                  ];

                console.log(pages[section][page]);

                element = (
                  <>
                    <Page />
                    <ScrollTop key={section + page} />

                    <div
                      css={{
                        margin: '12rem 0 9rem',
                        display: 'flex',
                        '[data-next]': {
                          marginLeft: 'auto',
                        },
                      }}>
                      {(previousPageKey || previousSectionLastPageKey) && (
                        <Link
                          to={`/${
                            previousPageKey ? section : previousSectionKey
                          }/${previousPageKey || previousSectionLastPageKey}`}
                          css={{
                            color: '#7ab2c8',
                            fontSize: '1.25em',
                            textDecoration: 'none',
                          }}>
                          <Heading look="h500" as="span">
                            {titleCase(
                              previousPageKey ? 'Previous' : previousSectionKey
                            )}
                          </Heading>
                          <div
                            css={{
                              textTransform: 'capitalize',
                              position: 'relative',
                              ':before': {
                                content: '‹',
                                position: 'absolute',
                                left: '-2rem',
                              },
                            }}>
                            {titleCase(
                              previousPageKey || previousSectionLastPageKey
                            )}
                          </div>
                        </Link>
                      )}

                      {(nextPageKey || nextSectionFirstPageKey) && (
                        <Link
                          data-next
                          to={`/${nextPageKey ? section : nextSectionKey}/${
                            nextPageKey || nextSectionFirstPageKey
                          }`}
                          css={{
                            color: '#7ab2c8',
                            fontSize: '1.25em',
                            textDecoration: 'none',
                            textAlign: 'right',
                          }}>
                          <Heading look="h500" as="span">
                            {titleCase(nextPageKey ? 'Next' : nextSectionKey)}
                          </Heading>
                          <br />
                          <div
                            css={{
                              textTransform: 'capitalize',
                              position: 'relative',
                              ':after': {
                                content: '›',
                                position: 'absolute',
                                right: '-2rem',
                              },
                            }}>
                            {titleCase(nextPageKey || nextSectionFirstPageKey)}
                          </div>
                        </Link>
                      )}
                    </div>
                  </>
                );
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
