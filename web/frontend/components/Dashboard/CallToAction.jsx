import {
  AlphaCard,
  Text,
  VerticalStack,
  HorizontalStack,
  HorizontalGrid,
  Icon,
} from "@shopify/polaris";
import { CircleRightMajor } from "@shopify/polaris-icons";
// import { Doughnut } from "react-chartjs-2";

export default function CallToAction(props) {
  return (
    <AlphaCard sectioned>
      <HorizontalGrid gap="4" columns={2}>
        <VerticalStack>
          <Text variant="headingMd" as="h3" color="subdued">
            Get the Gold badge
          </Text>
          <Text variant="heading2xl" as="p" fontWeight="bold">
            82.0%
          </Text>
          <HorizontalStack align="space-between">
            <Text variant="bodySm" as="p" color="subdued">
              View more
            </Text>
            <Icon source={CircleRightMajor} color="base" />
          </HorizontalStack>
        </VerticalStack>
        {/* <Doughnut /> */}
      </HorizontalGrid>
    </AlphaCard>
  );
}
