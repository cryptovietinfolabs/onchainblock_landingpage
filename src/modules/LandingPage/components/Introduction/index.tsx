import {
  Container,
  Grid,
  GridItem,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

import EthBridgeTable from "@/components/EthBridgeTable";

import LineCex from "./LineCex";

export default function Introduction(): React.ReactElement {
  return (
    <Container maxW="1800">
      <Stack as="section">
        <VStack fontWeight="bold">
          <Text
            fontSize={{ base: 16, md: "2xl" }}
            lineHeight="100%"
            textAlign="center"
          >
            Curious About Cryptocurrency Trends?
          </Text>
          <Text
            fontSize={{ base: 24, md: "4xl" }}
            lineHeight="100%"
            textAlign="center"
            mb={6}
          >
            Explore Onchain Data Today
          </Text>
        </VStack>
        <Grid templateColumns="repeat(12, 1fr)" gap={4}>
          <GridItem colSpan={{ base: 12, sm: 12, xl: 5 }}>
            <LineCex />
          </GridItem>
          <GridItem colSpan={{ base: 12, sm: 12, xl: 7 }}>
            <EthBridgeTable isDarkMode />
          </GridItem>
        </Grid>
      </Stack>
    </Container>
  );
}
