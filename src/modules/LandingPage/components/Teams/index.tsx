import { Container, SimpleGrid } from "@chakra-ui/react";

import TeamMember from "./TeamMember";

export default function Teams(): React.ReactElement {
  return (
    <Container maxW="6xl">
      <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
        <TeamMember />
        <TeamMember />
        <TeamMember />
        <TeamMember />
        <TeamMember />
        <TeamMember />
      </SimpleGrid>
    </Container>
  );
}
