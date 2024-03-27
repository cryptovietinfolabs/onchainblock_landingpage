import {
  Box,
  Button,
  GridItem,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

import s from "./style.module.scss";

export default function AboutHero(): React.ReactElement {
  return (
    <Box className={s.hero}>
      <SimpleGrid columns={{ base: 1, sm: 2 }} className={s.hero_wrapper}>
        <GridItem zIndex={1}>
          <Stack p="32px" pb="100px">
            <Stack className={s.hero_title}>
              <Text
                fontSize={48}
                color="brand.neutral.grey.1"
                lineHeight="100%"
              >
                UNRAVELING COMPREHENSIVE CRYPTO DATA with
              </Text>
              <Text
                fontSize={60}
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
                Your Complete Onchain Data Solution, Standardizing Financial and
                Alternative Data for Leading Blockchains and Decentralized
                Applications
              </Text>
              <Box>
                <Button>Click here</Button>
              </Box>
            </Stack>
            <Box className={s.hero_desc_wrapper}>
              <Text
                fontSize={14}
                color="brand.neutral.grey.1"
                className={s.hero_desc}
              >
                Your Complete Onchain Data Solution, Standardizing Financial and
                Alternative Data for Leading Blockchains and Decentralized
                Applications
              </Text>
            </Box>
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
  );
}
