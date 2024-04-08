import { Button, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

import LinkEffect from "@/components/LinkEffect";
import { navList } from "@/constants/navList";
import useUiContext from "@/contexts/UiProvider";

import s from "./style.module.scss";

interface DrawerNavProps {
  isOpen: boolean;
  onOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DrawerNav({
  isOpen,
  onOpenNav,
}: DrawerNavProps): React.ReactElement {
  const { activeSection } = useUiContext();
  const router = useRouter();

  return (
    <nav className={`${s.mobileNav} ${isOpen ? s.open : ""}`}>
      <div className={s.mobileNav_nav}>
        <Button
          variant="ghost"
          className={`${s.header_link} ${activeSection === "/" && s.active}`}
          onClick={() => {
            router.push("/");
          }}
        >
          <Text fontSize="md">Home</Text>
        </Button>
        {navList.map((item) => (
          <LinkEffect key={item.name} href={item.link} pageName={item.name}>
            <Button
              variant="ghost"
              className={`${s.header_link} ${
                activeSection === item.link && s.active
              }`}
              onClick={() => {
                onOpenNav(false);
              }}
            >
              <Text fontSize="md" fontWeight="bold">
                {item.name}
              </Text>
            </Button>
          </LinkEffect>
        ))}
      </div>
    </nav>
  );
}
