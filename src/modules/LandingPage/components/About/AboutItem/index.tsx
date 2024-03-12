import { Box, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

interface AboutItemProps {
  image: string;
  title: string;
  desc: string;
}

export default function AboutItem({
  image,
  title,
  desc,
}: AboutItemProps): React.ReactElement {
  return (
    <Box>
      <Box
        position="relative"
        aspectRatio={16 / 9}
        backgroundColor="grey"
        borderRadius={"10px"}
      >
        <Image src={image} alt={title} />
      </Box>
      <VStack textAlign="center">
        <Text fontSize="2xl">{title}</Text>
        <Text fontSize="sm">{desc}</Text>
      </VStack>
    </Box>
  );
}
