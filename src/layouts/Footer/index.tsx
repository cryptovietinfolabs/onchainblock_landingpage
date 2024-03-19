import {
  Box,
  Button,
  Container,
  Flex,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

import SvgInsert from "@/components/SvgInsert";
import { footerContents } from "@/constants/footerContents";

export default function Footer(): React.ReactElement {
  return (
    <Box
      as="footer"
      p="36px 0 80px 0"
      borderTop="1px solid"
      borderColor="brand.neutral.grey.2"
    >
      <Container maxW="6xl">
        <Flex justifyContent="space-between">
          <Stack>
            <Box mb="16px">
              <SvgInsert src="/logos/logo.svg" />
            </Box>
            <Text fontSize={14} fontWeight={600} color="brand.neutral.grey.4">
              ©2024 OnchainBlock. All Rights Reserved
            </Text>
          </Stack>
          {footerContents.map((item) => {
            return (
              <Stack key={item.title}>
                <Text fontSize={14} fontWeight={600} mb="16px">
                  {item.title}
                </Text>
                <Stack gap="12px">
                  {item.children.map((child) => {
                    return (
                      <Text
                        key={child.label}
                        fontSize={14}
                        as="a"
                        target="_blank"
                        href={child.link}
                      >
                        {child.label}
                      </Text>
                    );
                  })}
                </Stack>
              </Stack>
            );
          })}
        </Flex>
      </Container>
    </Box>
  );
}
