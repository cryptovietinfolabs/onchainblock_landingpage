import {
  Box,
  Button,
  Container,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

import SvgInsert from "@/components/SvgInsert";

export default function FooterLandingPage(): React.ReactElement {
  return (
    <Box as="footer" p={20}>
      <Container maxW="6xl">
        <SvgInsert src="/logos/logo.svg" className="mb-8" />
        <SimpleGrid columns={{ base: 1, md: 4 }}>
          <Stack width="fit-content">
            <Text fontWeight="bold">Resources</Text>
            <Button variant="text">Research</Button>
            <Button variant="text">Research</Button>
            <Button variant="text">Research</Button>
          </Stack>
          <Stack width="fit-content">
            <Text fontWeight="bold">Resources</Text>
            <Button variant="text">Research</Button>
            <Button variant="text">Research</Button>
            <Button variant="text">Research</Button>
          </Stack>
          <Stack width="fit-content">
            <Text fontWeight="bold">Resources</Text>
            <Button variant="text">Research</Button>
            <Button variant="text">Research</Button>
            <Button variant="text">Research</Button>
          </Stack>
          <Stack width="fit-content">
            <Text fontWeight="bold">Resources</Text>
            <Button variant="text">Research</Button>
            <Button variant="text">Research</Button>
            <Button variant="text">Research</Button>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
