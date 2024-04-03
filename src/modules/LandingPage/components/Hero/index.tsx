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
import Image from "next/image";
import { Ref, useRef } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

import s from "./style.module.scss";

export default function Hero(): React.ReactElement {
  const container = useRef<HTMLDivElement | null>(null);

  return (
    <Container as="main" maxW="6xl">
      <VStack spacing={8} className={s.hero} as="section">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          <Stack>
            <Text
              fontSize={{ base: 48, md: 56, xl: 80 }}
              lineHeight="100%"
              fontWeight={600}
              color="brand.neutral.black.1"
              bgGradient="linear(to-l, var(--gradient-1-from), var(--gradient-1-to))"
              bgClip="text"
            >
              ALL-IN-ONE ONCHAIN
            </Text>
          </Stack>
          <Stack justifyContent="space-between">
            <Text
              fontSize={{ base: 24, md: 36 }}
              fontWeight={600}
              color="brand.neutral.black.1"
              letterSpacing={{ base: "-1px", md: 0 }}
            >
              DATA ANALYSTIC FLATFORM
            </Text>
            <Text fontSize={16} color="brand.neutral.black.1">
              The place where you can delve deeper into the On-chain Data World
              of Stablecoins, Ethereum, and various other asset types in the
              Blockchain Universe.
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
            <SwiperSlide className={s.slide_img}>
              <Image
                src="/images/slide1.jpeg"
                alt="slide item"
                width={1920}
                height={1080}
              />
            </SwiperSlide>
            <SwiperSlide className={s.slide_img}>
              <Image
                src="/images/slide2.jpeg"
                alt="slide item"
                width={1920}
                height={1080}
              />
            </SwiperSlide>
            <SwiperSlide className={s.slide_img}>
              <Image
                src="/images/slide3.jpeg"
                alt="slide item"
                width={1920}
                height={1080}
              />
            </SwiperSlide>
            <SwiperSlide className={s.slide_img}>
              <Image
                src="/images/slide4.jpeg"
                alt="slide item"
                width={1920}
                height={1080}
              />
            </SwiperSlide>
            <SwiperSlide className={s.slide_img}>
              <Image
                src="/images/slide5.jpeg"
                alt="slide item"
                width={1920}
                height={1080}
              />
            </SwiperSlide>
            <SwiperSlide className={s.slide_img}>
              <Image
                src="/images/slide6.jpeg"
                alt="slide item"
                width={1920}
                height={1080}
              />
            </SwiperSlide>
          </Swiper>
        </Stack>
      </VStack>
    </Container>
  );
}
