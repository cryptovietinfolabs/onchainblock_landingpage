import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

export default function Partner(): React.ReactElement {
  return (
    <VStack>
      <Text fontSize="4xl" lineHeight="100%" as="h3">
        Our Partners
      </Text>
      <HStack>
        <Box
          position="relative"
          aspectRatio={16 / 9}
          backgroundColor="grey"
          borderRadius={"10px"}
          width="200px"
        >
          <Image src={""} alt={""} />
        </Box>
        <Box
          position="relative"
          aspectRatio={16 / 9}
          backgroundColor="grey"
          borderRadius={"10px"}
          width="200px"
        >
          <Image src={""} alt={""} />
        </Box>
        <Box
          position="relative"
          aspectRatio={16 / 9}
          backgroundColor="grey"
          borderRadius={"10px"}
          width="200px"
        >
          <Image src={""} alt={""} />
        </Box>
        <Box
          position="relative"
          aspectRatio={16 / 9}
          backgroundColor="grey"
          borderRadius={"10px"}
          width="200px"
        >
          <Image src={""} alt={""} />
        </Box>
      </HStack>
      <HStack>
        <Box
          position="relative"
          aspectRatio={16 / 9}
          backgroundColor="grey"
          borderRadius={"10px"}
          width="200px"
        >
          <Image src={""} alt={""} />
        </Box>
        <Box
          position="relative"
          aspectRatio={16 / 9}
          backgroundColor="grey"
          borderRadius={"10px"}
          width="200px"
        >
          <Image src={""} alt={""} />
        </Box>
      </HStack>
    </VStack>
  );
}
