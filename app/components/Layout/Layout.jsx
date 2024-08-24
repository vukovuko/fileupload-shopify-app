import {
  Page,
  Layout,
  Thumbnail,
  Text,
  Card,
} from '@shopify/polaris';
import React from 'react';

export default function LayoutComponent() {
  return (
    <Page fullWidth>
      <Layout>
        <Layout.Section variant="oneHalf">
          <Card title="Florida" actions={[{content: 'Manage'}]}>
              <Thumbnail
                source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
                alt="Black choker necklace"
              />
              <Text>Richard Smith</Text>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}