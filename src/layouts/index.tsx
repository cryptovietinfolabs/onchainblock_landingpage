"use client";
import { Box, Flex } from "@chakra-ui/react";

import Container from "@/components/Container";

import Footer from "./Footer";
import Header from "./Header";
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
