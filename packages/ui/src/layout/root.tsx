/** @jsx jsx */
import { jsx } from '@compiled/css-in-js';
import { Header, HorizontalStack } from '../components';
import { Icon } from '../icon';

interface RootProps {
  children: React.ReactNode;
}

export const RootLayout = ({ children }: RootProps) => (
  <div>
    <Header>
      <nav aria-label="main" css={{ marginLeft: 'auto' }}>
        <HorizontalStack gap={2}>
          <a
            title="Github"
            css={{ display: 'inline-block', ':hover': { opacity: 0.5 } }}
            href="https://github.com/atlassian-labs/compiled-css-in-js">
            <Icon name="github" />
          </a>
          <a
            title="Npm"
            css={{ display: 'inline-block', ':hover': { opacity: 0.5 } }}
            href="https://www.npmjs.com/package/@compiled/css-in-js">
            <Icon name="npm" />
          </a>
        </HorizontalStack>
      </nav>
    </Header>

    <nav aria-label="sidebar"></nav>

    <main>{children}</main>
  </div>
);
