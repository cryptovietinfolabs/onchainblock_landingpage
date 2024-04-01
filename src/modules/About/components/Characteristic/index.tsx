import { List, ListItem, Stack, Text, VStack } from "@chakra-ui/react";

import { aboutCharacteristicData } from "@/constants/aboutCharacteristicData";

import s from "./style.module.scss";

export default function AboutCharacteristic(): React.ReactElement {
  return (
    <VStack className={s.characteristic}>
      <Text fontSize={42} fontWeight={600}>
        Our Onchain Data Platform
      </Text>
      <List className={s.characteristic_list}>
        {aboutCharacteristicData.map((item) => {
          return (
            <ListItem key={item.label}>
              <Stack>
                <Text fontSize={24} fontWeight={600}>
                  {item.label}
                </Text>
                <Text fontSize={18}>{item.desc}</Text>
              </Stack>
            </ListItem>
          );
        })}
      </List>
    </VStack>
  );
}
