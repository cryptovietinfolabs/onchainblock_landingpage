import { Stack } from "@chakra-ui/react";

import About from "./components/About";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Partner from "./components/Partner";

export default function LandingPage(): React.ReactElement {
  return (
    <Stack gap={40} overflowX="hidden">
      <Hero />
      <Introduction />
      <About />
      <Partner />
    </Stack>
  );
}
