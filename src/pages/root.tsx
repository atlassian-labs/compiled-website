/** @jsx jsx */
import { jsx } from '@compiled/css-in-js';
import { Icon } from '../icon';
import { Header } from '../components/header';

interface RootProps {
  children: React.ReactNode;
}

export const RootLayout = ({ children }: RootProps) => (
  <div>
    <Header>
      <nav aria-label="main" css={{ marginLeft: 'auto' }}>
        <a href="https://github.com/atlassian-labs/compiled-css-in-js">
          <Icon name="github" />
        </a>
      </nav>
    </Header>

    <nav aria-label="sidebar"></nav>

    <main>{children}</main>
  </div>
);
