import { styled } from '@compiled/css-in-js';
import React from 'react';
import {
  RootLayout,
  VerticalStack,
  Heading,
  CodeBlock,
} from '@compiled/website-ui';
import { MDXProvider, MDXProviderComponentsProp } from '@mdx-js/react';
import { useLocation, Link } from 'react-router-dom';
import { LinkItem, Section } from './side-nav';
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

const Anchor = ({ children }: { children: string | string[] }) => {
  const id = (typeof children === 'string'
    ? [children.split(' ').join('-')]
    : children
  )
    .filter((child) => typeof child === 'string')
    .join('-')
    .toLowerCase();

  return (
    <a
      href={`#${id}`}
      id={id}
      // @ts-ignore
      css={{
        color: 'currentColor',
        textDecoration: 'none',
        position: 'relative',
        ':before': {
          opacity: 0,
          content: '🔗',
          position: 'absolute',
          left: '-4rem',
          fontSize: '3rem',
          transform: 'translateX(1rem)',
          transition: 'opacity 100ms, transform 100ms',
          paddingRight: '5rem',
        },
        ':hover': {
          ':before': {
            opacity: 1,
            transform: 'none',
          },
        },
      }}>
      {children}
    </a>
  );
};

const components: MDXProviderComponentsProp = {
  h1: ({ children }) => (
    <Heading look="h100">
      <Anchor>{children}</Anchor>
    </Heading>
  ),
  h2: ({ children }) => (
    <Heading look="h200">
      <Anchor>{children}</Anchor>
    </Heading>
  ),
  h3: ({ children }) => (
    <Heading look="h300">
      <Anchor>{children} </Anchor>
    </Heading>
  ),
  h4: ({ children }) => (
    <Heading look="h400">
      <Anchor>{children}</Anchor>
    </Heading>
  ),
  h5: ({ children }) => (
    <Heading look="h500">
      <Anchor>{children} </Anchor>
    </Heading>
  ),
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

interface Page {
  default: React.ComponentType<{}>;
  data: {
    headings: {
      depth: number;
      text: string;
    }[];
    order?: number;
    section: string;
  };
}

const getSections = () => {
  const pages: Record<string, Page> = require('../pages/*.mdx');
  const sections: Record<string, (Page & { name: string })[]> = {};

  Object.entries(pages)
    .sort(
      (page1, page2) =>
        (page1[1].data.order || 100) - (page2[1].data.order || 100)
    )
    .forEach(([pageName, page]) => {
      const section = page.data.section;
      if (!section) {
        throw new Error(`
Put ${pageName}.mdx in a section! E.g:
---
section: My section
---
      `);
      }

      sections[section] = sections[section] || [];
      sections[section].push({
        ...page,
        name: pageName,
      });
    });

  return Object.entries(sections)
    .sort(([a], [b]) => {
      const aOrder = Number(a.match(/^(\d+)-/)[1] || 100);
      const bOrder = Number(b.match(/^(\d+)-/)[1] || 100);
      return aOrder - bOrder;
    })
    .map(([name, pages]) => ({
      name: name,
      pages,
    }));
};

const getPage = (slug: string) => {
  const name = slug.slice(1);
  const sections = getSections();
  const pages: Record<string, Page> = require('../pages/*.mdx');
  const page = name === '' ? sections[0].pages[0] : pages[name];
  if (!page) {
    return null;
  }

  const sectionIndex = sections.findIndex(
    (section) => section.name === page.data.section
  );
  const previousSection = sections[sectionIndex - 1];
  const nextSection = sections[sectionIndex + 1];
  const section = sections[sectionIndex];
  const pageIndex = section.pages.findIndex((page) => page.name === name);
  const nextPage = section.pages[pageIndex + 1];
  const previousPage = section.pages[pageIndex - 1];

  return {
    Component: page.default,
    data: page.data,
    next: (nextPage || nextSection) && {
      cta: nextPage ? 'Next' : nextSection.name.replace(/^\d+-/, ''),
      name: nextPage ? nextPage.name : nextSection.pages[0].name,
    },
    previous: (previousPage || previousSection) && {
      cta: previousPage
        ? 'Previous'
        : previousSection.name.replace(/^\d+-/, ''),
      name: previousPage
        ? previousPage.name
        : previousSection.pages[previousSection.pages.length - 1].name,
    },
  };
};

export const App = () => {
  const location = useLocation();
  const pageSlug = location.pathname;
  const page = getPage(pageSlug);

  return (
    <RootLayout
      aside={
        page && (
          <nav aria-label="page">
            <VerticalStack gap={0.5}>
              {page.data.headings
                .filter((heading) => heading.depth < 4)
                .map((heading) => (
                  <div style={{ marginLeft: `${heading.depth}rem` }}>
                    <Heading look="h500" key={heading.text}>
                      <a
                        css={{ color: '#7ab2c8', textDecoration: 'none' }}
                        href={`#${heading.text
                          .split(' ')
                          .join('-')
                          .toLowerCase()}`}>
                        {heading.text}
                      </a>
                    </Heading>
                  </div>
                ))}
            </VerticalStack>
          </nav>
        )
      }
      sidenav={
        <>
          {getSections().map((section) => (
            <Section
              key={section.name}
              title={section.name.replace(/^\d+-/, '')}>
              {section.pages.map((page) => (
                <LinkItem href={`/${page.name}`} key={page.name}>
                  {titleCase(page.name)}
                </LinkItem>
              ))}
            </Section>
          ))}
          <Footer />
        </>
      }>
      <MDXProvider components={components}>
        <ScrollTop key={pageSlug} />

        {page && (
          <>
            <page.Component />

            <div
              css={{
                margin: '12rem 0 9rem',
                display: 'flex',
                '[data-next]': {
                  marginLeft: 'auto',
                },
              }}>
              {page.previous && (
                <Link
                  to={`/${page.previous.name}`}
                  css={{
                    color: '#7ab2c8',
                    fontSize: '1.25em',
                    textDecoration: 'none',
                  }}>
                  <Heading look="h500" as="span">
                    {page.previous.cta}
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
                    {titleCase(page.previous.name)}
                  </div>
                </Link>
              )}

              {page.next && (
                <Link
                  data-next
                  to={`/${page.next.name}`}
                  css={{
                    color: '#7ab2c8',
                    fontSize: '1.25em',
                    textDecoration: 'none',
                    textAlign: 'right',
                  }}>
                  <Heading look="h500" as="span">
                    {page.next.cta}
                  </Heading>
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
                    {titleCase(page.next.name)}
                  </div>
                </Link>
              )}
            </div>
          </>
        )}
      </MDXProvider>
    </RootLayout>
  );
};
