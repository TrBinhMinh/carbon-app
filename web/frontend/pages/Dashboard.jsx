import {
  AlphaCard,
  Page,
  Layout,
  VerticalStack,
  Text,
  HorizontalStack,
} from "@shopify/polaris";
import { Icon } from "@shopify/polaris";
import { CaretUpMinor } from "@shopify/polaris-icons";
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

  const totalDonation = (
    <AlphaCard sectioned>
      <Text variant="headingSm" as="h3" color="subdued">
        Total donation
      </Text>
      <VerticalStack>
        <Text variant="headingXl" as="p">
          $2084
        </Text>
        <HorizontalStack gap="4" wrap={false} blockAlign="center">
          <HorizontalStack>
            <Icon
              source={CaretUpMinor}
              color="base"
              className="--p-font-size-500"
            />
            <Text variant="headingSm" as="p" color="subdued">
              11.2%
            </Text>
          </HorizontalStack>
          <Text variant="bodySm" as="p" color="subdued">
            so far this month
          </Text>
        </HorizontalStack>
      </VerticalStack>
    </AlphaCard>
  );

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
            {totalDonation}
            {totalDonation}
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
