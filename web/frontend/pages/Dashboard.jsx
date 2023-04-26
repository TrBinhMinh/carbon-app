import { AlphaCard, Page, Layout, VerticalStack, Text } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

export default function PageName() {
  const primaryAction = { content: "Foo", url: "/foo" };
  const secondaryActions = [{ content: "Bar", url: "/bar" }];
  const actionGroups = [
    { title: "Baz", actions: [{ content: "Baz", url: "/baz" }] },
  ];

  return (
    <Page>
      <TitleBar
        title="Dashboard"
        primaryAction={primaryAction}
        secondaryActions={secondaryActions}
        actionGroups={actionGroups}
      />
      <Layout>
        <Layout.Section>
          <AlphaCard sectioned>
            <Text variant="headingMd" as="h2">
              Heading
            </Text>
            <VerticalStack>
              <p>Body</p>
            </VerticalStack>
          </AlphaCard>
          <AlphaCard sectioned>
            <Text variant="headingMd" as="h2">
              Heading
            </Text>
            <VerticalStack>
              <p>Body</p>
            </VerticalStack>
          </AlphaCard>
        </Layout.Section>
        <Layout.Section secondary>
          <AlphaCard sectioned>
            <Text variant="headingMd" as="h2">
              Heading
            </Text>
            <VerticalStack>
              <p>Body</p>
            </VerticalStack>
          </AlphaCard>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
