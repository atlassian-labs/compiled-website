/** @jsx jsx */
import { jsx } from '@compiled/css-in-js';
import { Icon } from '../icon';
import { Header } from '../components/header';
import { HorizontalStack } from '../components/stack';

interface RootProps {
  children: React.ReactNode;
}

export const RootLayout = ({ children }: RootProps) => (
  <div>
    <Header>
      <nav aria-label="main" css={{ marginLeft: 'auto' }}>
        <HorizontalStack gap={2}>
          <a
            title="Npm"
            css={{ display: 'inline-block', ':hover': { fill: '#0052CC' } }}
            href="https://www.npmjs.com/package/@compiled/css-in-js">
            <Icon name="npm" />
          </a>

          <a
            title="Github"
            css={{ display: 'inline-block', ':hover': { fill: '#0052CC' } }}
            href="https://github.com/atlassian-labs/compiled-css-in-js">
            <Icon name="github" />
          </a>
        </HorizontalStack>
      </nav>
    </Header>

    <nav aria-label="sidebar"></nav>

    <main>{children}</main>
  </div>
);
