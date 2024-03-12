import { Avatar, HStack, Stack, Text } from "@chakra-ui/react";

export default function TeamMember(): React.ReactElement {
  return (
    <Stack>
      <HStack>
        <Avatar />
        <Text fontWeight="bold">Name</Text>
        <Text>@Valkyrie</Text>
      </HStack>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic magni in
        ipsa doloremque molestiae ducimus velit! Beatae illum, quis sint ratione
        earum reprehenderit nesciunt repudiandae necessitatibus dolorum
        doloribus ipsum molestias!
      </Text>
    </Stack>
  );
}
