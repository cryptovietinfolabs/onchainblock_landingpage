"use client";

import { Box, Button, Container, HStack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

import s from "./style.module.scss";

export default function HeaderLandingPage(): React.ReactElement {
  const router = useRouter();

  return (
    <header className={s.header}>
      <Container maxW="6xl" className="fixed">
        <Box>
          <HStack justifyContent="space-between">
            <Button variant="ghost">OnchainBlock</Button>
            <HStack>
              <Button variant="ghost">Home</Button>
              <Button
                variant="ghost"
                onClick={() => {
                  router.push("/stablecoin");
                }}
              >
                Dashboard
              </Button>

              <Button>Connect Wallet</Button>
            </HStack>
          </HStack>
        </Box>
      </Container>
    </header>
  );
}
