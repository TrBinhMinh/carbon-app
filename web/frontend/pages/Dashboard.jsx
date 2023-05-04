import {
  Page,
  Layout,
  Text,
  HorizontalStack,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import TotalDonation from "../components/Dashboard/TotalDonation";
import OffsetGoal from "../components/Dashboard/OffsetGoal";

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
            <TotalDonation />
            <TotalDonation />
            <OffsetGoal />
            <TotalDonation />
          </HorizontalStack>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
