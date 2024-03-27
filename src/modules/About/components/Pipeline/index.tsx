import { Stack, Text } from "@chakra-ui/react";

import { pipelineData } from "@/constants/pipelineData";

export default function AboutPipeline(): React.ReactElement {
  return (
    <Stack>
      <Text>Our data pipeline</Text>
      <Text>
        Through our integrated deep data supply chain, we provide accurate and
        detailed data.
      </Text>

      {pipelineData.map((item) => (
        <Stack key={item.label}>
          <Text>{item.label}</Text>
          <Text>{item.desc}</Text>
        </Stack>
      ))}
    </Stack>
  );
}
