import {
  AlphaCard,
  Text,
  VerticalStack,
  HorizontalStack,
  Icon,
  ProgressBar,
} from "@shopify/polaris";
import { CaretUpMinor } from "@shopify/polaris-icons";

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
    </AlphaCard>
  );
}
