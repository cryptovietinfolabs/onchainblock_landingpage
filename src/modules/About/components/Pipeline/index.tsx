"use client";

import {
  Box,
  GridItem,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";

import { pipelineData } from "@/constants/pipelineData";
import useWindowSize from "@/hooks/common/useWindowSize";

import s from "./style.module.scss";

export default function AboutPipeline(): React.ReactElement {
  const { isMobile } = useWindowSize();
  return (
    <Stack className={s.pipeline}>
      <VStack className={s.pipeline_title}>
        <Text fontSize={{ base: 24, sm: 24, md: 48 }}>Our data pipeline</Text>
        <Text fontSize={{ base: 14, sm: 14, md: 16 }}>
          Through our integrated deep data supply chain, we provide accurate and
          detailed data.
        </Text>
      </VStack>

      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 4 }}
        className={s.pipeline_list}
      >
        {!isMobile && (
          <GridItem>
            <Stack>
              <Box className={s.pipeline_item_img}>
                <Image src="/images/0.png" alt="" fill />
              </Box>
            </Stack>
          </GridItem>
        )}
        {pipelineData.map((item, index) => (
          <GridItem key={item.label}>
            <Stack>
              <Box className={s.pipeline_item_img}>
                <Image src={item.image} alt="" fill />
              </Box>
              <Text fontSize={{ base: 24, sm: 40 }} fontWeight={600}>
                0{index + 1}
              </Text>
              <Text fontSize={{ base: 14, sm: 18 }} fontWeight={600}>
                {item.label}
              </Text>
              <Text fontSize={{ base: 14, sm: 18 }}>{item.desc}</Text>
            </Stack>
          </GridItem>
        ))}
      </SimpleGrid>
    </Stack>
  );
}
