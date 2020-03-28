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
        <Icon name="github" />
      </nav>
    </Header>

    <nav aria-label="sidebar"></nav>

    <main>{children}</main>
  </div>
);
