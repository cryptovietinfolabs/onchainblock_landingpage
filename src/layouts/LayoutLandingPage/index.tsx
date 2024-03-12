import { Container } from "@chakra-ui/react";
import { ThemeProvider } from "../../contexts/ThemeProvider";
import HeaderLandingPage from "../HeaderLandingPage";
import FooterLandingPage from "../FooterLandingPage";

interface LayoutLandingPageProps {
  children: React.ReactElement;
}

export default function LayoutLandingPage({
  children,
}: LayoutLandingPageProps) {
  return (
    <ThemeProvider cookies={"blastTheme"}>
      <HeaderLandingPage />
      {children}
      <FooterLandingPage />
    </ThemeProvider>
  );
}
