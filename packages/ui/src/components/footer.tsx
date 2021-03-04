import React from 'react';
import '@compiled/react';
import { Content, HorizontalStack, Text } from '@compiled/website-ui';

export const Footer = () => (
  <>
    <div css={{ height: 80 }} />
    <footer
      css={{
        padding: '4rem 0',
        fontSize: 11,
        background: '#FAFBFC',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        a: {
          color: 'currentColor',
          textDecoration: 'none',
        },
      }}>
      <Content>
        <HorizontalStack css={{ textAlign: 'center' }} gap={3}>
          <a href="https://atlassian.com">
            <Text variant="supplementary">
              © {new Date().getFullYear()} Atlassian
            </Text>
          </a>
          <a href="https://www.atlassian.com/company/careers">
            <Text variant="supplementary">Careers</Text>
          </a>
          <a href="https://www.atlassian.com/legal/trademark">
            <Text variant="supplementary">Trademark</Text>
          </a>
          <a href="https://www.atlassian.com/legal/privacy-policy">
            <Text variant="supplementary">Privacy</Text>
          </a>
          <a href="https://github.com/atlassian-labs/compiled/blob/master/LICENSE">
            <Text variant="supplementary">License</Text>
          </a>
        </HorizontalStack>
      </Content>
    </footer>
  </>
);
