import React from 'react';
import { RootLayout, VerticalStack, Heading } from '@compiled/website-ui';
import { MDXProvider } from '@mdx-js/react';
import { useLocation, Link } from 'react-router-dom';
import { LinkItem, Section } from './side-nav';
import { Footer } from './footer';
import { ScrollTop } from './scroll-top';
import { PageTitle } from './page-title';
import { titleCase } from '../utils/string';
import { ToAnchor } from './anchor';
import { components } from './mdx-components';

interface Page {
  default: React.ComponentType<{}>;
  data: {
    headings: {
      depth: number;
      text: string;
    }[];
    order?: number;
    name?: string;
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
  const sections = getSections();
  const name = slug === '/' ? sections[0].pages[0].name : slug.slice(1);
  const pages: Record<string, Page> = require('../pages/*.mdx');
  const page = pages[name];
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
    name,
    Component: page.default,
    data: page.data,
    next: (nextPage || nextSection) && {
      cta: nextPage ? 'Next' : nextSection.name.replace(/^\d+-/, ''),
      name: nextPage ? nextPage.data.name : nextSection.pages[0].data.name,
      slug: nextPage ? nextPage.name : nextSection.pages[0].name,
    },
    previous: (previousPage || previousSection) && {
      cta: previousPage
        ? 'Previous'
        : previousSection.name.replace(/^\d+-/, ''),
      name: previousPage
        ? previousPage.data.name
        : previousSection.pages[previousSection.pages.length - 1].data.name,
      slug: previousPage
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
                .map((heading, index) => (
                  <ToAnchor
                    depth={heading.depth}
                    key={`${heading.text}-${index}`}>
                    {heading.text}
                  </ToAnchor>
                ))}
            </VerticalStack>
          </nav>
        )
      }
      sidenav={
        <>
          {getSections().map((section, sectionIndex) => (
            <Section
              key={section.name}
              title={section.name.replace(/^\d+-/, '')}>
              {section.pages.map((page, pageIndex) => (
                <LinkItem
                  aria-current={
                    location.pathname === `/${page.name}` ||
                    (location.pathname === '/' &&
                      sectionIndex === 0 &&
                      pageIndex === 0)
                      ? 'page'
                      : undefined
                  }
                  href={`/${page.name}`}
                  key={page.name}>
                  {page.data.name || titleCase(page.name)}
                </LinkItem>
              ))}
            </Section>
          ))}
          <Footer />
        </>
      }>
      <MDXProvider components={components}>
        <ScrollTop key={pageSlug} />
        <PageTitle title={page && page.name} />

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
                  to={`/${page.previous.slug}`}
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
                      position: 'relative',
                      ':before': {
                        content: '‹',
                        position: 'absolute',
                        left: '-2rem',
                      },
                    }}>
                    {page.previous.name || titleCase(page.previous.slug)}
                  </div>
                </Link>
              )}

              {page.next && (
                <Link
                  data-next
                  to={`/${page.next.slug}`}
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
                      position: 'relative',
                      ':after': {
                        content: '›',
                        position: 'absolute',
                        right: '-2rem',
                      },
                    }}>
                    {page.next.name || titleCase(page.next.slug)}
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
