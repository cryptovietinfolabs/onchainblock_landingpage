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

import s from "./style.module.scss";

export default function AboutPipeline(): React.ReactElement {
  return (
    <Stack className={s.pipeline}>
      <VStack className={s.pipeline_title}>
        <Text fontSize={42} fontWeight={600}>
          Our data pipeline
        </Text>
        <Text fontSize={16}>
          Through our integrated deep data supply chain, we provide accurate and
          detailed data.
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, sm: 4 }} className={s.pipeline_list}>
        <GridItem>
          <Stack>
            <Box className={s.pipeline_item_img}>
              <Image src="" alt="" fill />
            </Box>
          </Stack>
        </GridItem>
        {pipelineData.map((item, index) => (
          <GridItem key={item.label}>
            <Stack>
              <Box className={s.pipeline_item_img}>
                <Image src="" alt="" fill />
              </Box>
              <Text fontSize={40} fontWeight={600}>
                0{index + 1}
              </Text>
              <Text fontSize={18} fontWeight={600}>
                {item.label}
              </Text>
              <Text fontSize={18}>{item.desc}</Text>
            </Stack>
          </GridItem>
        ))}
      </SimpleGrid>
    </Stack>
  );
}
