/** @jsx jsx */
import { jsx, styled } from '@compiled/css-in-js';
import {
  Header,
  HorizontalStack,
  HeaderSpacing,
  Content,
  VerticalStack,
} from '../components';

interface RootProps {
  children: React.ReactNode;
  sidenav?: React.ReactNode;
}

const Link = styled.a<{ href: string; exact?: boolean }>`
  color: currentColor;
  text-decoration: none;
  padding: 0.5rem;
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
    opacity: 0.5;
  }

  &&:last-child {
    margin-right: -0.5rem;
  }
`;

export const RootLayout = ({ children, sidenav }: RootProps) => (
  <div>
    <Header css={{ gridArea: 'header' }}>
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

    {sidenav ? (
      <Content css={{ display: 'flex' }}>
        <nav
          aria-label="sidenav"
          css={{ width: '30rem', marginRight: '2rem', flexShrink: 0 }}>
          <HeaderSpacing />
          <VerticalStack spacing={9}>{sidenav}</VerticalStack>
        </nav>
        <main
          css={{
            flexShrink: 1,
            padding: '6rem 0',
            display: 'block',
            minWidth: 1,
          }}>
          {/* Slightly shorter than header spacing because of the headings have a bit of space. */}
          {/* Ideally we would use this: https://github.com/seek-oss/braid-design-system/blob/master/lib/hooks/typography/basekick.ts#L34-L51 */}
          <div css={{ marginBottom: '12rem' }} />
          {children}
        </main>
      </Content>
    ) : (
      <main>{children}</main>
    )}
  </div>
);
