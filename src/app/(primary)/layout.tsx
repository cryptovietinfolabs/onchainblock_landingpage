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
        <Header />
        {children}
        <Footer />
      </Container>
    </Flex>
  );
}
