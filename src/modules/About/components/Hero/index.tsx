"use client";

import {
  Box,
  GridItem,
  HStack,
  IconButton,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

import SvgInsert from "@/components/SvgInsert";
import useWindowSize from "@/hooks/common/useWindowSize";

import s from "./style.module.scss";

export default function AboutHero(): React.ReactElement {
  const { isMobile } = useWindowSize();

  return (
    <Box className={s.hero_outer}>
      <Box className={s.hero}>
        <SimpleGrid columns={{ base: 1, md: 2 }} className={s.hero_wrapper}>
          <Image
            src="/images/about-hero.webp"
            alt="hero"
            fill
            className={s.hero_image}
          />
          <GridItem zIndex={1}>
            <Stack p="32px" pb={{ base: "32px", md: "100px" }}>
              <Stack className={s.hero_title}>
                <Text
                  fontSize={{ base: 24, sm: 24, md: 48 }}
                  color="brand.neutral.grey.1"
                  lineHeight="100%"
                >
                  UNRAVELING COMPREHENSIVE CRYPTO DATA with
                </Text>
                <Text
                  fontSize={{ base: 28, sm: 28, md: 60 }}
                  bgGradient="linear(to-l, var(--gradient-1-from), var(--gradient-1-to))"
                  bgClip="text"
                  lineHeight="100%"
                >
                  ONCHAINBLOCK
                </Text>
                <Text
                  fontSize={14}
                  color="brand.neutral.grey.1"
                  className={s.hero_desc}
                >
                  Your Complete Onchain Data Solution, Standardizing Financial
                  and Alternative Data for Leading Blockchains and Decentralized
                  Applications
                </Text>
                <Box>
                  <HStack>
                    <IconButton
                      color="brand.neutral.grey.1"
                      isRound
                      variant="ghost"
                      icon={<SvgInsert src={"/icons/Discord.svg"} />}
                      aria-label="Discord"
                      as="a"
                      target="_blank"
                      href="https://discord.gg/qVnyna7U"
                    />
                    <IconButton
                      color="brand.neutral.grey.1"
                      isRound
                      variant="ghost"
                      icon={<SvgInsert src={"/icons/Twitter.svg"} />}
                      aria-label="Twitter"
                      as="a"
                      target="_blank"
                      href="https://cryptoviet.info/analytics"
                    />
                  </HStack>
                </Box>
              </Stack>
              {!isMobile && (
                <Box className={s.hero_desc_wrapper}>
                  <Text
                    fontSize={14}
                    color="brand.neutral.grey.1"
                    className={s.hero_desc}
                  >
                    Your Complete Onchain Data Solution, Standardizing Financial
                    and Alternative Data for Leading Blockchains and
                    Decentralized Applications
                  </Text>
                </Box>
              )}
            </Stack>
          </GridItem>
          <GridItem>
            <Box className={s.hero_hole_wrapper}>
              <Box className={s.hero_hole} />
            </Box>
          </GridItem>
        </SimpleGrid>
        <SimpleGrid
          columns={{ base: 1, sm: 2 }}
          className={s.hero_wrapper_bottom}
        >
          <GridItem></GridItem>
          <GridItem></GridItem>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
