import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";

import s from "./style.module.scss";

export default function ContactPage(): React.ReactElement {
  return (
    <Container maxW="6xl">
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} className={s.contact}>
        <Stack>
          <Text>Contact Us</Text>
          <Text fontSize={14}>
            Mail to:{" "}
            <Box
              as="a"
              href="mailto:contact@onchainblock.xyz"
              color="brand.primary.blue.3"
            >
              contact@onchainblock.xyz
            </Box>
          </Text>
        </Stack>
        <FormControl>
          <Stack className={s.contact_form}>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} mb={6}>
              <Stack>
                <FormLabel fontSize={14} mb={0}>
                  Name
                </FormLabel>
                <Input variant="fill" />
              </Stack>
              <Stack>
                <FormLabel fontSize={14} mb={0}>
                  Email
                </FormLabel>
                <Input type="email" variant="fill" />
              </Stack>
            </SimpleGrid>
            <FormLabel fontSize={14} mb={0}>
              Message
            </FormLabel>
            <Textarea variant="fill" placeholder="Your message..." />
            <Flex justifyContent="flex-end">
              <Button
                variant="solid"
                mt={4}
                type="submit"
                className={s.contact_form_submit}
              >
                Send
              </Button>
            </Flex>
          </Stack>
        </FormControl>
      </SimpleGrid>
    </Container>
  );
}
