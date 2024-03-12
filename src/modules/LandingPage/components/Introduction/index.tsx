// import LineCex from "@/components/Stablecoin/Cex/components/LineCex";
// import EthBridgeTable from "@/components/ETH/components/EthBridge/EthBridgeTable";

import {
  Container,
  Grid,
  GridItem,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function Introduction(): React.ReactElement {
  return (
    <Container maxW="1800">
      <Stack as="section">
        <VStack fontWeight="bold">
          <Text fontSize="4xl">Curious About Cryptocurrency Trends?</Text>
          <Text fontSize="4xl">Explore Onchain Data Today</Text>
        </VStack>
        <Grid templateColumns="repeat(12, 1fr)" gap={4}>
          <GridItem colSpan={5}>{/* <LineCex /> */}</GridItem>
          <GridItem colSpan={7}>{/* <EthBridgeTable isDarkMode /> */}</GridItem>
        </Grid>
      </Stack>
    </Container>
  );
}
