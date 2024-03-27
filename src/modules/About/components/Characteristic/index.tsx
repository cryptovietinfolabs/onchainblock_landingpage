import { Box, Stack, Text } from "@chakra-ui/react";

import { aboutCharacteristicData } from "@/constants/aboutCharacteristicData";

export default function AboutCharacteristic(): React.ReactElement {
  return (
    <Box>
      <Text>Our Onchain Data Platform</Text>
      {aboutCharacteristicData.map((item) => {
        return (
          <Stack key={item.label}>
            <Text>{item.label}</Text>
            <Text>{item.desc}</Text>
          </Stack>
        );
      })}
    </Box>
  );
}
