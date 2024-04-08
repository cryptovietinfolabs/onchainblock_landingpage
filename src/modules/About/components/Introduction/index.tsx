"use client";

import { GridItem, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react";

import { aboutIntroductionContents } from "@/constants/aboutIntroductionContents";
import useWindowSize from "@/hooks/common/useWindowSize";

import s from "./style.module.scss";

export default function AboutIntroduction(): React.ReactElement {
  const { isMobile } = useWindowSize();

  return (
    <VStack className={s.introduction}>
      <Text
        fontSize={{ base: 24, sm: 24, md: 48 }}
        fontWeight={600}
        className={s.introduction_title}
      >
        Leading the Way in Blockchain Data Standards
      </Text>

      {isMobile ? (
        <Stack>
          {aboutIntroductionContents.map((item) => (
            <Text fontSize={{ base: 14, sm: 14, md: 18 }} key={item}>
              {item}
            </Text>
          ))}
        </Stack>
      ) : (
        <SimpleGrid
          columns={{ base: 1, sm: 2 }}
          className={s.introduction_list}
        >
          <GridItem>
            <Stack className={s.introduction_item}>
              <Text fontSize={18}>{aboutIntroductionContents[0]}</Text>
            </Stack>
          </GridItem>
          <GridItem />
          <GridItem />
          <GridItem>
            <Stack className={s.introduction_item}>
              <Text fontSize={18}>{aboutIntroductionContents[1]}</Text>
            </Stack>
          </GridItem>
          <GridItem>
            <Stack className={s.introduction_item}>
              <Text fontSize={18}>{aboutIntroductionContents[2]}</Text>
            </Stack>
          </GridItem>
        </SimpleGrid>
      )}
    </VStack>
  );
}
