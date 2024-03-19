import { Container, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react";

import { aboutBottomData, aboutTopData } from "@/constants/aboutData";

import AboutItem from "./AboutItem";

export default function About(): React.ReactElement {
  return (
    <Container maxW="6xl">
      <Stack as="section">
        <VStack mb={8}>
          <Text fontSize="4xl" lineHeight="100%" as="h3">
            Ready to Uncover Hidden Crypto Gems?
          </Text>
          <Text fontSize="4xl" lineHeight="100%" as="h3">
            Explore Onchain Data Today
          </Text>
        </VStack>
        <Stack gap={8}>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
            {aboutTopData.map((item) => (
              <AboutItem
                key={item.title}
                image={item.image}
                title={item.title}
                desc={item.desc}
              />
            ))}
          </SimpleGrid>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
            {aboutBottomData.map((item) => (
              <AboutItem
                key={item.title}
                image={item.image}
                title={item.title}
                desc={item.desc}
              />
            ))}
          </SimpleGrid>
        </Stack>
      </Stack>
    </Container>
  );
}
