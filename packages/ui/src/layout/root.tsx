import { styled } from '@compiled/css-in-js';
import React, { Fragment, useState, useEffect } from 'react';
import {
  Header,
  HorizontalStack,
  HeaderSpacing,
  Content,
  VerticalStack,
  ScreenReaderText,
} from '../components';

interface RootProps {
  children: React.ReactNode;
  sidenav?: React.ReactNode;
  aside?: React.ReactNode;
}

const Link = styled.a<{ href: string; exact?: boolean }>`
  color: currentColor;
  text-decoration: none;
  padding: 1rem 0.5rem;
  border-bottom: ${(props) => {
    const active = '0.375rem solid #7ab2c8';
    const inactive = '0.375rem solid transparent';

    if (props.exact) {
      return document.location.pathname === props.href ? active : inactive;
    } else {
      return document.location.pathname.startsWith(props.href)
        ? active
        : inactive;
    }
  }};

  :hover {
    color: #7ab2c8;
  }

  &&:last-child {
    margin-right: -0.5rem;
  }
`;

export const RootLayout = ({ children, sidenav, aside }: RootProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // TODO: Move to global style component.
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  return (
    <Fragment>
      <Header>
        <nav
          aria-label="main"
          css={{
            marginLeft: 'auto',
          }}>
          <HorizontalStack
            gap={2}
            css={{ display: 'flex', alignItems: 'center' }}>
            <Link exact href="/">
              Intro
            </Link>
            <Link href="/docs">Docs</Link>
            <Link
              title="Github"
              href="https://github.com/atlassian-labs/compiled-css-in-js">
              Github
            </Link>
          </HorizontalStack>
        </nav>
      </Header>

      {sidenav || aside ? (
        <Content
          css={{
            display: 'flex',
            position: 'relative',
          }}>
          <input
            tabIndex={-1}
            key={`sidenav-toggle-open-${isOpen}`}
            defaultChecked={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            id="sidenav-toggle"
            css={{
              position: 'absolute',
              opacity: 0,
              top: '-9000px',
              height: 1,
              width: 1,
              pointerEvents: 'none',
            }}
            type="checkbox"
          />
          <nav
            onClick={(e) => {
              if ((e.target as HTMLElement).nodeName === 'A') {
                setIsOpen(false);
              }
            }}
            aria-label="sidenav"
            css={{
              flexShrink: 0,
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: '#fff',
              zIndex: 100,
              overflow: 'auto',
              textAlign: 'center',
              fontSize: '1.5em',
              display: 'none',
              'input:checked + &': {
                display: 'block',
              },
              '@media only screen and (min-width: 1220px)': {
                overflow: 'visible',
                width: '27rem',
                marginRight: '2rem',
                position: 'static',
                fontSize: '1em',
                backgroundColor: 'transparent',
                textAlign: 'left',
                display: 'block',
                zIndex: 0,
              },
            }}>
            <HeaderSpacing />
            <VerticalStack
              css={{
                '@media only screen and (min-width: 1220px)': {
                  position: 'sticky',
                  top: '9rem',
                },
              }}
              spacing={9}>
              {sidenav}
            </VerticalStack>
          </nav>
          <label
            htmlFor="sidenav-toggle"
            tabIndex={0}
            css={{
              position: 'fixed',
              bottom: '2rem',
              left: '3rem',
              width: '10rem',
              height: '10rem',
              zIndex: 400,
              cursor: 'pointer',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '8rem',
              color: 'black',
              '@media only screen and (min-width: 1220px)': {
                display: 'none',
              },
            }}>
            <ScreenReaderText>
              {isOpen ? 'Close navigation' : 'Open navigation'}+
            </ScreenReaderText>
            <span aria-hidden="true">🍔</span>
          </label>
          <main
            css={{
              flexShrink: 1,
              padding: '6rem 0',
              display: 'block',
              minWidth: 1,
              width: '100%',
            }}>
            {/* Slightly shorter than header spacing because of the headings have a bit of space. */}
            {/* Ideally we would use this: https://github.com/seek-oss/braid-design-system/blob/master/lib/hooks/typography/basekick.ts#L34-L51 */}
            <div css={{ marginBottom: '12rem' }} />
            {children}
          </main>

          {aside && (
            <aside
              css={{
                display: 'none',
                '@media only screen and (min-width: 1220px)': {
                  width: '22rem',
                  display: 'block',
                  paddingLeft: '4rem',
                  flexShrink: 0,
                },
              }}>
              <HeaderSpacing />
              <VerticalStack
                css={{
                  '@media only screen and (min-width: 1220px)': {
                    position: 'sticky',
                    top: '9rem',
                  },
                }}
                spacing={9}>
                {aside}
              </VerticalStack>
            </aside>
          )}
        </Content>
      ) : (
        <main>{children}</main>
      )}
    </Fragment>
  );
};
