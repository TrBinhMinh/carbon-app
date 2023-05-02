import {
  AlphaCard,
  Page,
  Layout,
  VerticalStack,
  Text,
  HorizontalStack,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

export default function PageName() {
  const primaryAction = { content: "Primary action", url: "/foo" };
  const secondaryActions = [
    { content: "Edit", url: "/bar" },
    { content: "Refund", url: "/bar" },
  ];
  const actionGroups = [
    { title: "More actions", actions: [{ content: "Baz", url: "/baz" }] },
  ];

  return (
    <Page fullWidth={true}>
      <Layout>
        <Layout.Section>
          <Text variant="heading3xl" as="h1" fontWeight="medium">
            Welcome back, Tracy
          </Text>
          <Text variant="headingXl" as="h2" fontWeight="medium">
            Let's see your impact!
          </Text>
        </Layout.Section>
        <Layout.Section>
          <HorizontalStack wrap={false} gap="4">
            <AlphaCard sectioned>
              <Text variant="headingMd" as="h3">
                Heading
              </Text>
              <VerticalStack>
                <p>Body</p>
              </VerticalStack>
            </AlphaCard>
            <AlphaCard sectioned>
              <Text variant="headingMd" as="h3">
                Heading
              </Text>
              <VerticalStack>
                <p>Body</p>
              </VerticalStack>
            </AlphaCard>
          </HorizontalStack>
        </Layout.Section>
      </Layout>
    </Page>
    // <Page
    //   pagination={{
    //     hasPrevious: true,
    //     hasNext: true,
    //   }}
    // >
    //   <TitleBar
    //     title="Dashboard"
    //     primaryAction={primaryAction}
    //     secondaryActions={secondaryActions}
    //     actionGroups={actionGroups}
    //   />
    //   <Layout>
    //     <Layout.Section>
    //       <AlphaCard sectioned>
    //         <Text variant="headingMd" as="h2">
    //           Heading
    //         </Text>
    //         <VerticalStack>
    //           <p>Body</p>
    //         </VerticalStack>
    //       </AlphaCard>
    //       <AlphaCard sectioned>
    //         <Text variant="headingMd" as="h2">
    //           Heading
    //         </Text>
    //         <VerticalStack>
    //           <p>Body</p>
    //         </VerticalStack>
    //       </AlphaCard>
    //     </Layout.Section>
    //     <Layout.Section secondary>
    //       <AlphaCard sectioned>
    //         <Text variant="headingMd" as="h2">
    //           Heading
    //         </Text>
    //         <VerticalStack>
    //           <p>Body</p>
    //         </VerticalStack>
    //       </AlphaCard>
    //     </Layout.Section>
    //   </Layout>
    // </Page>
  );
}
