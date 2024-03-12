"use client";

import "swiper/css";

import {
  Container,
  Divider,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Ref, useRef } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

import s from "./style.module.scss";

export default function Hero(): React.ReactElement {
  const container = useRef<HTMLDivElement | null>(null);

  return (
    <Container as="main" maxW="6xl">
      <VStack spacing={8} className={s.hero} as="section">
        <SimpleGrid columns={2} spacing={8}>
          <Stack>
            <Text fontSize="6xl" lineHeight="100%" fontWeight="bold">
              ALL-IN-ONE
            </Text>
            <Text fontSize="6xl" lineHeight="100%" fontWeight="bold">
              ONCHAIN
            </Text>
          </Stack>
          <Stack justifyContent="space-between">
            <Text fontSize="4xl">DATA ANALYSTIC FLATFORM</Text>
            <Text>
              Welcome to OnchainBlock - the destination to delve deeper into the
              realm of Stablecoins, Ethereum, and various other asset types
              based on blockchain technology
            </Text>
          </Stack>
        </SimpleGrid>
        <Divider />
        <Stack>
          <Swiper
            ref={container as Ref<SwiperRef> | undefined}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[Autoplay, EffectCoverflow, Pagination]}
            className={"overflow-visible"}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            <SwiperSlide>
              <img src="https://source.unsplash.com/random?computer chart-1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://source.unsplash.com/random?computer chart-2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://source.unsplash.com/random?computer chart-3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://source.unsplash.com/random?computer chart-4" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://source.unsplash.com/random?computer chart-5" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://source.unsplash.com/random?computer chart-6" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://source.unsplash.com/random?computer chart-7" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://source.unsplash.com/random?computer chart-8" />
            </SwiperSlide>
          </Swiper>
        </Stack>
      </VStack>
    </Container>
  );
}
