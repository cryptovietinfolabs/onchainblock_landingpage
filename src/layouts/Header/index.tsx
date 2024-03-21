"use client";

import { Box, Button, Container, HStack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

import SvgInsert from "@/components/SvgInsert";
import useWindowSize from "@/hooks/common/useWindowSize";

import s from "./style.module.scss";

export default function Header(): React.ReactElement {
  const router = useRouter();
  const { isMobile } = useWindowSize();

  return (
    <header className={s.header}>
      <Container maxW="6xl" className="fixed">
        <Box>
          <HStack justifyContent="space-between">
            {isMobile ? (
              <SvgInsert src="/logos/logo-square.svg" />
            ) : (
              <SvgInsert src="/logos/logo.svg" />
            )}

            <HStack>
              {!isMobile && (
                <>
                  <Button variant="ghost">Home</Button>
                  <Button
                    variant="ghost"
                    onClick={() => {
                      router.push("/stablecoin");
                    }}
                  >
                    Dashboard
                  </Button>
                </>
              )}

              <Button>Connect Wallet</Button>
            </HStack>
          </HStack>
        </Box>
      </Container>
    </header>
  );
}
