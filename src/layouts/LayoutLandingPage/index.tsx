import { BrandThemeProvider } from "../../contexts/BrandThemeProvider";
import FooterLandingPage from "../FooterLandingPage";
import HeaderLandingPage from "../HeaderLandingPage";

interface LayoutLandingPageProps {
  children: React.ReactElement;
}

export default function LayoutLandingPage({
  children,
}: LayoutLandingPageProps): React.ReactElement {
  return (
    <BrandThemeProvider cookies={"blastTheme"}>
      <HeaderLandingPage />
      {children}
      <FooterLandingPage />
    </BrandThemeProvider>
  );
}
