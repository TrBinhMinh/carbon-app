import {
  Page,
  Layout,
  Text,
  FormLayout,
  TextField,
  AlphaCard,
  VerticalStack,
  Select,
  Button,
  HorizontalStack,
} from "@shopify/polaris";
import { useCallback, useState } from "react";

export default function PageName() {
  const [selected, setSelected] = useState("today");

  const handleSelectChange = useCallback((value) => setSelected(value), []);

  const options = [
    { label: "Vietnam", value: "vietnam" },
    { label: "Australia", value: "australia" },
    { label: "USA", value: "USA" },
  ];

  return (
    <Page>
      <Layout>
        <Layout.Section>
          <Text
            variant="heading3xl"
            as="h1"
            fontWeight="semibold"
            alignment="center"
          >
            Estimate the amount of carbon offset for your shop
          </Text>
          <Text
            variant="headingSm"
            as="h2"
            fontWeight="regular"
            alignment="center"
            color="subdued"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer scrambled it to make a
            type book.
          </Text>
        </Layout.Section>
        <Layout.Section>
          <AlphaCard>
            <FormLayout>
              <VerticalStack gap="5">
                <Text variant="headingXl" as="h3">
                  The status of your business
                </Text>
                <TextField
                  label="Overall order per month"
                  onChange={() => {}}
                  placeholder="12"
                  autoComplete="off"
                  error="This field is required"
                  requiredIndicator
                />
                <TextField
                  label="Average order weight"
                  onChange={() => {}}
                  placeholder="3kg"
                  autoComplete="off"
                  error="This field is required"
                  requiredIndicator
                />
                <TextField
                  label="Overseas shipping"
                  onChange={() => {}}
                  helpText="Enter the percentage of orders shipped overseas"
                  placeholder="40%"
                  autoComplete="off"
                />
              </VerticalStack>
              <VerticalStack gap="5">
                <Text variant="headingXl" as="h3">
                  The type of your business
                </Text>
                <TextField
                  label="Your industry type"
                  onChange={() => {}}
                  placeholder="12"
                  autoComplete="off"
                  requiredIndicator
                />
                <TextField
                  label="Number of Employees"
                  onChange={() => {}}
                  placeholder="20"
                  helpText="Enter the number of employees your company has"
                  autoComplete="off"
                />
                <Select
                  label="Main Country of manufacture"
                  options={options}
                  onChange={handleSelectChange}
                  value={selected}
                />
              </VerticalStack>
              <HorizontalStack align="center">
                <Button primary>Calculate shipping emissions</Button>
              </HorizontalStack>
            </FormLayout>
          </AlphaCard>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
