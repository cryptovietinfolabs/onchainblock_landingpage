import { Stack } from "@chakra-ui/react";

import AboutCharacteristic from "./components/Characteristic";
import AboutHero from "./components/Hero";
import AboutIntroduction from "./components/Introduction";
import AboutPipeline from "./components/Pipeline";

export default function AboutPage(): React.ReactElement {
  return (
    <Stack>
      <AboutHero />
      <AboutIntroduction />
      <AboutCharacteristic />
      <AboutPipeline />
    </Stack>
  );
}
