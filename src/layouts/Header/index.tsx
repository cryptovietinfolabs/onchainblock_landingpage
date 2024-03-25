"use client";

import {
  Box,
  Button,
  Container,
  HStack,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import SvgInsert from "@/components/SvgInsert";
import { navList } from "@/constants/navList";
import { useScroll } from "@/contexts/ScrollProvider";
import useUiContext from "@/contexts/UiProvider";
import useWindowSize from "@/hooks/common/useWindowSize";

import DrawerNav from "./DrawerNav";
import s from "./style.module.scss";

export default function Header(): React.ReactElement {
  const { isDesktop } = useWindowSize();
  const { scrollTo } = useScroll();
  const { activeSection } = useUiContext();
  const [isOpenNav, setIsOpenNav] = useState(false);

  useEffect(() => {
    if (isOpenNav) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isOpenNav]);

  return (
    <header className={s.header}>
      <Container maxW="6xl" className="fixed">
        <Box>
          <HStack justifyContent="space-between">
            {!isDesktop ? (
              <>
                <div
                  className={`${s.hamburger} ${isOpenNav ? s.open : ""}`}
                  onClick={() => setIsOpenNav(!isOpenNav)}
                >
                  <span />
                  <span />
                  <span />
                  <span />
                </div>

                <HStack>
                  <Button
                    variant="ghost"
                    as="a"
                    href="https://onchainblock.xyz/"
                    rightIcon={
                      <SvgInsert
                        src="/icons/external-link.svg"
                        className={s.externalLink_icon}
                      />
                    }
                  >
                    Dashboard
                  </Button>

                  <IconButton
                    isDisabled
                    icon={<SvgInsert src="/icons/wallet.svg" />}
                    aria-label="connect wallet"
                  />
                </HStack>

                <DrawerNav isOpen={isOpenNav} onOpenNav={setIsOpenNav} />
              </>
            ) : (
              <>
                <SvgInsert src="/logos/logo.svg" />
                <HStack>
                  {navList.map((navItem) => {
                    return (
                      <Button
                        variant="ghost"
                        key={navItem.name}
                        className={`${s.header_link} ${
                          activeSection === navItem.link && s.active
                        }`}
                        onClick={() => scrollTo(navItem.link)}
                      >
                        <Text fontSize="md" fontWeight="bold">
                          {navItem.name}
                        </Text>
                      </Button>
                    );
                  })}
                  <Button
                    variant="ghost"
                    as="a"
                    href="https://onchainblock.xyz/"
                    rightIcon={
                      <SvgInsert
                        src="/icons/external-link.svg"
                        className={s.externalLink_icon}
                      />
                    }
                  >
                    Dashboard
                  </Button>

                  <Button isDisabled>Connect Wallet</Button>
                </HStack>
              </>
            )}
          </HStack>
        </Box>
      </Container>
    </header>
  );
}
