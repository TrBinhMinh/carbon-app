import {
  AlphaCard,
  Text,
  VerticalStack,
  HorizontalStack,
  Icon,
} from "@shopify/polaris";
import { CaretUpMinor } from "@shopify/polaris-icons";

export default function TotalDonation(props) {
  return (
    <AlphaCard sectioned>
      <Text variant="headingMd" as="h3" color="subdued">
        Total donation
      </Text>
      <VerticalStack>
        <Text variant="heading3xl" as="p" fontWeight="bold">
          $2084
        </Text>
        <HorizontalStack gap="4" wrap={false} blockAlign="center">
          <HorizontalStack>
            <Icon
              source={CaretUpMinor}
              color="base"
              className="--p-font-size-500"
            />
            <Text variant="headingMd" as="p" color="subdued">
              11.2%
            </Text>
          </HorizontalStack>
          <Text variant="bodyMd" as="p" color="subdued">
            so far this month
          </Text>
        </HorizontalStack>
      </VerticalStack>
    </AlphaCard>
  );
}
