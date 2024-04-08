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
import useWindowSize from "@/hooks/common/useWindowSize";

export default function Footer(): React.ReactElement {
  const { isMobile } = useWindowSize();
  return (
    <Box
      as="footer"
      p="40px 0 40px 0"
      borderTop="1px solid"
      borderColor="brand.neutral.grey.2"
    >
      <Container maxW="6xl">
        {isMobile ? (
          <>
            <Box mb={16}>
              <SvgInsert src="/logos/logo.svg" />
            </Box>
            <SimpleGrid columns={2} mb={20}>
              <Stack key={footerContents[0].title}>
                <Text fontSize={14} fontWeight={600} mb="16px">
                  {footerContents[0].title}
                </Text>
                <Stack gap="12px">
                  {footerContents[0].children.map((child) => {
                    return (
                      <Text
                        key={`footer_${child.label}`}
                        fontSize={14}
                        as="a"
                        target="_blank"
                        href={child.link}
                        color="brand.neutral.grey.4"
                      >
                        {child.label}
                      </Text>
                    );
                  })}
                </Stack>
              </Stack>
              <Stack gap={16}>
                <Stack key={footerContents[1].title}>
                  <Text fontSize={14} fontWeight={600} mb="16px">
                    {footerContents[1].title}
                  </Text>
                  <Stack gap="12px">
                    {footerContents[1].children.map((child) => {
                      return (
                        <Text
                          key={`footer_${child.label}`}
                          fontSize={14}
                          color="brand.neutral.grey.4"
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
                <Stack key={footerContents[2].title}>
                  <Text fontSize={14} fontWeight={600} mb="16px">
                    {footerContents[2].title}
                  </Text>
                  <Stack gap="12px">
                    {footerContents[2].children.map((child) => {
                      return (
                        <Text
                          key={`footer_${child.label}`}
                          fontSize={14}
                          color="brand.neutral.grey.4"
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
              </Stack>
            </SimpleGrid>

            <Text fontSize={14} fontWeight={600} color="brand.neutral.grey.4">
              ©2024 OnchainBlock. All Rights Reserved
            </Text>
          </>
        ) : (
          <Flex justifyContent="space-between" flexWrap="wrap">
            <Stack mb="40px">
              <Box mb="12px">
                <SvgInsert src="/logos/logo.svg" />
              </Box>
              <Text fontSize={14} fontWeight={600} color="brand.neutral.grey.4">
                ©2024 OnchainBlock. All Rights Reserved
              </Text>
            </Stack>
            <Flex justifyContent="space-between" gap={20}>
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
                            key={`footer_${child.label}`}
                            fontSize={14}
                            as="a"
                            target="_blank"
                            href={child.link}
                            color="brand.neutral.grey.4"
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
          </Flex>
        )}
      </Container>
    </Box>
  );
}
