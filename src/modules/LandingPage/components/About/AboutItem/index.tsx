import { Box, Flex, Stack, Text, VStack } from "@chakra-ui/react";
import cn from "classnames";
import Image from "next/image";

import SvgInsert from "@/components/SvgInsert";

import s from "./style.module.scss";

interface AboutItemProps {
  image: string;
  title: string;
  desc: string;
  dir?: "left" | "right" | "top";
}

export default function AboutItem({
  image,
  title,
  desc,
  dir = "right",
}: AboutItemProps): React.ReactElement {
  return (
    <Box className={cn(s.item, s[`item__${dir}`])}>
      <Flex className={cn(s.item_top, s[`item_top__${dir}`])}>
        <Text fontSize={32} fontWeight={600} className={s.item_title}>
          {title}
        </Text>
        <Box className={cn(s.item_icon, s[`item_icon__${dir}`])}>
          <SvgInsert src="/icons/arrow.svg" />
        </Box>
      </Flex>
      <Flex className={s.item_content} maxW="85%">
        <Text fontSize="sm" className={s.item_desc}>
          {desc}
        </Text>
      </Flex>
    </Box>
  );
}
