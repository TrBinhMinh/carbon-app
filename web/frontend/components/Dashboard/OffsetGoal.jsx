import {
  AlphaCard,
  Text,
  VerticalStack,
  HorizontalStack,
  ProgressBar,
} from "@shopify/polaris";

export default function OffsetGoal(props) {
  return (
    <AlphaCard sectioned>
      <Text variant="headingMd" as="h3" color="subdued">
        Carbon offset goal
      </Text>
      <VerticalStack>
        <Text variant="heading2xl" as="p" fontWeight="bold">
          20%
        </Text>
      </VerticalStack>
      <div style={{ width: 225 }}>
        <ProgressBar progress={40} size="small" />
      </div>
      <HorizontalStack align="space-between">
        <Text variant="bodySm" as="p" color="subdued">3.26kg</Text>
        <Text variant="bodySm" as="p" color="subdued">1000kg</Text>
      </HorizontalStack>
    </AlphaCard>
  );
}
