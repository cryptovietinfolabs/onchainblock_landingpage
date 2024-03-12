import {
  Button,
  ButtonGroup,
  Container,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

import { pricingList } from "@/constants/pricingList";

import PricingCardItem from "./PricingCard";

export default function Pricing(): React.ReactElement {
  return (
    <Container maxW="6xl">
      <VStack as="section" gap={6}>
        <Text fontSize="4xl">Plans that Adapt to Your Needs</Text>
        <ButtonGroup isAttached variant="outline">
          <Button>Monthly</Button>
          <Button variant="solid" bgColor="gray.600">
            Annual
            <Text as="span">Save over 24%</Text>
          </Button>
        </ButtonGroup>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
          {pricingList.map((item) => (
            <PricingCardItem key={item.plan} {...item} />
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
}
