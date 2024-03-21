"use client";

import { Box, HStack, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

import useWindowSize from "@/hooks/common/useWindowSize";

import s from "./style.module.scss";

export default function Partner(): React.ReactElement {
  const { isMobile } = useWindowSize();
  return (
    <VStack as="section" mb="80px">
      <Text fontSize="4xl" lineHeight="100%" as="h3">
        Our Partners
      </Text>

      <HStack className={s.slider}>
        <Box className={s.slide_track}>
          <Box className={s.slide}>
            <Image src="/images/ait-protocol.svg" alt="moon" fill />
          </Box>
          <Box className={s.slide}>
            <Image src="/images/ethereum.png" alt="moon" fill />
          </Box>
          <Box className={s.slide}>
            <Image src="/images/s6k.png" alt="moon" fill />
          </Box>
          <Box className={s.slide}>
            <Image src="/images/starknet.png" alt="moon" fill />
          </Box>
          <Box className={s.slide}>
            <Image src="/images/zk.svg" alt="moon" fill />
          </Box>

          <Box className={s.slide}>
            <Image src="/images/ait-protocol.svg" alt="moon" fill />
          </Box>
          <Box className={s.slide}>
            <Image src="/images/ethereum.png" alt="moon" fill />
          </Box>
          <Box className={s.slide}>
            <Image src="/images/s6k.png" alt="moon" fill />
          </Box>
          <Box className={s.slide}>
            <Image src="/images/starknet.png" alt="moon" fill />
          </Box>
          <Box className={s.slide}>
            <Image src="/images/zk.svg" alt="moon" fill />
          </Box>
        </Box>
      </HStack>
      {/* <HStack>
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
      </HStack> */}
    </VStack>
  );
}
