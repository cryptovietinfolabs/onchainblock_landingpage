"use client";
import { Box, Flex } from "@chakra-ui/react";
import Footer from "@Layouts/Footer";
import Header from "@Layouts/Header";

import Container from "@/components/Container";

import s from "./style.module.scss";

interface LayoutProps {
  children: React.ReactElement;
}

export default function Layout({ children }: LayoutProps): React.ReactElement {
  return (
    <Flex>
      <Container>
        <Box className={s.bg_wrapper}>
          <Box className={s.bg} />
          <Box className={s.bg} />
          <Box className={s.bg} />
          <Box className={s.bg} />
        </Box>

        <div className={s.wrapper}>
          <div className={`${s.base} ${s.one}`}></div>
          <div className={`${s.base} ${s.two}`}></div>
          <div className={`${s.base} ${s.three}`}></div>
        </div>

        <Header />
        {children}
        <Footer />
      </Container>
    </Flex>
  );
}
