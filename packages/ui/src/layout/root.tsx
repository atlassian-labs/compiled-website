/** @jsx jsx */
import { jsx, styled } from '@compiled/css-in-js';
import { Header, HorizontalStack, HeaderSpacing, Content } from '../components';
import { Icon } from '../icon';

interface RootProps {
  children: React.ReactNode;
  sidenav?: React.ReactNode;
}

const Link = styled.a<{ href: string }>`
  color: currentColor;
  text-decoration: none;
  padding: 0.5rem;
  border-bottom: ${(props) =>
    document.location.pathname.startsWith(props.href)
      ? '0.375rem solid #7ab2c8'
      : '0.375rem solid transparent'};

  :hover {
    opacity: 0.5;
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
        <HorizontalStack gap={2} css={{ display: 'flex', alignItems: 'center' }}>
          <Link href="/docs">Docs</Link>
          <Link title="Github" href="https://github.com/atlassian-labs/compiled-css-in-js">
            Github
          </Link>
        </HorizontalStack>
      </nav>
    </Header>

    {sidenav ? (
      <Content css={{ display: 'flex' }}>
        <nav aria-label="sidenav" css={{ width: '30rem', flexShrink: 0 }}>
          <HeaderSpacing />
          {sidenav}
        </nav>
        <main>
          <HeaderSpacing />
          {children}
        </main>
      </Content>
    ) : (
      <main>{children}</main>
    )}
  </div>
);
