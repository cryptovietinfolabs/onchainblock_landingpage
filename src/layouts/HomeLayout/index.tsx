import { Box } from "@chakra-ui/react";

import Container from "@/components/Container";

import Footer from "../Footer";
import Header from "../Header";
import s from "./style.module.scss";

interface IBasicLayoutProps {
  children: React.ReactElement;
}

export default function HomeLayout({
  children,
}: IBasicLayoutProps): React.ReactElement {
  return (
    <Container>
      <Box className={s.bg_wrapper}>
        <Box className={s.bg} />
        <Box className={s.bg} />
        <Box className={s.bg} />
        <Box className={s.bg} />
      </Box>

      <div className={s.wrapper}>
        <div className={`${s.base} ${s.one}`}></div>
        <div className={`${s.base} ${s.two}`}></div>
        <div className={`${s.base} ${s.three}`}></div>
      </div>

      <Header />
      {children}
      <Footer />
    </Container>
  );
}
