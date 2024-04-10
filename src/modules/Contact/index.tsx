"use client";

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
  useToast,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";

import s from "./style.module.scss";

interface IContactEmailSchema {
  name: string;
  email: string;
  message: string;
}

const defaultValues = {
  name: "",
  email: "",
  message: "",
};

const validationSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string().required(),
});

export default function ContactPage(): React.ReactElement {
  const [isLoading, setIsLoading] = useState<boolean>();
  const [isSuccess, setIsSuccess] = useState<boolean>();
  const [isError, setIsError] = useState<boolean>();
  const toast = useToast();
  const methods = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues,
    mode: "onBlur",
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const onSubmit = async (data: IContactEmailSchema): Promise<void> => {
    try {
      toast({
        id: "loading",
        title: "Sending...",
        status: "loading",
        isClosable: true,
        variant: "loading",
      });
      await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      });
      toast.close("loading");
      toast({
        id: "success",
        title: "Success!",
        description: "Your message was sent.",
        status: "success",
        isClosable: true,
        variant: "success",
      });
    } catch (error) {
      toast({
        id: "error",
        title: "Error",
        description: "There was an error sending your message.",
        status: "error",
        isClosable: true,
        variant: "error",
      });
    }
  };

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
        <FormControl as="form" onSubmit={handleSubmit(onSubmit)}>
          <FormProvider {...methods}>
            <Stack className={s.contact_form}>
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} mb={6}>
                <Stack>
                  <FormLabel fontSize={14} mb={0}>
                    Name
                  </FormLabel>
                  <Input variant="fill" {...register("name")} />
                </Stack>
                <Stack>
                  <FormLabel fontSize={14} mb={0}>
                    Email
                  </FormLabel>
                  <Input type="email" variant="fill" {...register("email")} />
                </Stack>
              </SimpleGrid>
              <FormLabel fontSize={14} mb={0}>
                Message
              </FormLabel>
              <Textarea
                variant="fill"
                placeholder="Your message..."
                {...register("message")}
              />
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
          </FormProvider>
        </FormControl>
      </SimpleGrid>
      {/* {isLoading && <Alert status="info">Sending message...</Alert>}
      {isSuccess && (
        <Alert status="success" position="fixed" top="80px" right="20px">
          <AlertIcon />
          <AlertTitle>Success!</AlertTitle>
          <AlertDescription>
            Your message was sent successfully.
          </AlertDescription>
          <CloseButton position="absolute" right="8px" top="8px" />
        </Alert>
      )}
      {isError && (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Error!</AlertTitle>
          <AlertDescription>
            There was an error sending your message.
          </AlertDescription>
        </Alert>
      )} */}
    </Container>
  );
}
