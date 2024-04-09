"use client";
import { Box, Stack } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

import SectionIndicatorWrapper from "@/components/SectionIndicatorWrapper";
import { useScroll } from "@/contexts/ScrollProvider";

import ContactPage from "../Contact";
import About from "./components/About";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Partner from "./components/Partner";

export default function LandingPage(): React.ReactElement {
  const { scrollRefs } = useScroll();
  const homeRef = useRef<HTMLDivElement>(null);
  const introductionRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const partnersRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRefs["/"] = homeRef;
    scrollRefs.introduction = introductionRef;
    scrollRefs.about = aboutRef;
    scrollRefs.partners = partnersRef;
    scrollRefs.contact = contactRef;
  }, [homeRef, introductionRef, aboutRef, partnersRef, contactRef, scrollRefs]);

  return (
    <>
      <div />
      <Stack gap={40} overflowX="hidden">
        <Hero />
        <SectionIndicatorWrapper section="introduction">
          <Box ref={introductionRef}>
            <Introduction />
          </Box>
        </SectionIndicatorWrapper>
        <SectionIndicatorWrapper section="about">
          <Box ref={aboutRef}>
            <About />
          </Box>
        </SectionIndicatorWrapper>
        <SectionIndicatorWrapper section="partners">
          <Box ref={partnersRef}>
            <Partner />
          </Box>
        </SectionIndicatorWrapper>
        <SectionIndicatorWrapper section="contact">
          <Box ref={contactRef}>
            <ContactPage />
          </Box>
        </SectionIndicatorWrapper>
      </Stack>
    </>
  );
}
