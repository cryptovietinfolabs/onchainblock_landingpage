import { Button, Text } from "@chakra-ui/react";

import { navList } from "@/constants/navList";
import { useScroll } from "@/contexts/ScrollProvider";
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
  const { scrollTo } = useScroll();

  return (
    <nav className={`${s.mobileNav} ${isOpen ? s.open : ""}`}>
      <div className={s.mobileNav_nav}>
        {navList.map((item) => (
          <Button
            key={item.name}
            variant="text"
            className={`${s.mobileNav_item}
          ${s.heading1} ${activeSection === item.link && s.active}`}
            onClick={() => {
              scrollTo(item.link);
              onOpenNav(false);
            }}
          >
            <Text fontSize="2xl" color="brand.yellow.200">
              {item.name}
            </Text>
          </Button>
        ))}
      </div>
    </nav>
  );
}
