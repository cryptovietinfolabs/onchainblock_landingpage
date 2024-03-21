import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

import { aboutData } from "@/constants/aboutData";

import AboutItem from "./AboutItem";
import s from "./style.module.scss";

export default function About(): React.ReactElement {
  return (
    <Container maxW="6xl">
      <Stack
        as="section"
        backgroundImage="radial-gradient(#ffffff55 5%, transparent 0)"
        backgroundSize="35px 35px;"
        p="80px"
      >
        <VStack mb={8}>
          <Text fontSize="4xl" lineHeight="100%" as="h3">
            Ready to Uncover Hidden Crypto Gems?
          </Text>
          <Text fontSize="4xl" lineHeight="100%" as="h3">
            Explore Onchain Data Today
          </Text>
        </VStack>
        <Stack gap={8}>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
            {aboutData.map((item) => {
              if (!item.title)
                return (
                  <Box position="relative">
                    <div className={s.wrapper}>
                      <div className={`${s.base} ${s.one}`}></div>
                      <div className={`${s.base} ${s.two}`}></div>
                      <div className={`${s.base} ${s.three}`}></div>
                    </div>
                  </Box>
                );
              else {
                return (
                  <AboutItem
                    key={item.title}
                    image={item.image!}
                    title={item.title!}
                    desc={item.desc!}
                    dir={item.dir as "top" | "right" | "left"}
                  />
                );
              }
            })}
          </SimpleGrid>

          {/* <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
            {aboutTopData.map((item) => (
              <AboutItem
                key={item.title}
                image={item.image}
                title={item.title}
                desc={item.desc}
              />
            ))}
          </SimpleGrid>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
            {aboutBottomData.map((item) => (
              <AboutItem
                key={item.title}
                image={item.image}
                title={item.title}
                desc={item.desc}
              />
            ))}
          </SimpleGrid> */}
        </Stack>
      </Stack>
    </Container>
  );
}
