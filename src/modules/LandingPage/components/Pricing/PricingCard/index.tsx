"use client";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  ListItem,
  Text,
  UnorderedList,
  useToken,
} from "@chakra-ui/react";

import s from "./style.module.scss";

interface PricingCardItemProps {
  title: string;
  plan: string;
  desc: string;
  list: string[];
  recommended?: boolean;
  buttonText: string;
}

export default function PricingCardItem({
  title,
  plan,
  desc,
  list,
  recommended,
  buttonText,
}: PricingCardItemProps): React.ReactElement {
  const [whiteo2, blue200, blue300] = useToken("colors", [
    "brand.black.o20",
    "brand.blue.200",
    "brand.blue.300",
  ]);

  return (
    <Card
      border={`1px solid ${whiteo2}`}
      borderColor={recommended ? "orange" : blue300}
      transition="all 0.3s ease"
      _hover={{ bg: whiteo2 }}
      className={s.card}
    >
      <CardHeader>
        <Text fontWeight="bold">{title}</Text>
        <Text fontSize="3xl" fontWeight="bold">
          {plan}
        </Text>
        <Text>{desc}</Text>
      </CardHeader>
      <CardBody>
        <UnorderedList>
          {list.map((item) => (
            <ListItem key={item}>
              <Text fontSize="sm">{item}</Text>
            </ListItem>
          ))}
        </UnorderedList>
      </CardBody>
      <CardFooter>
        <Button w="100%" bgColor={recommended ? "orange" : blue200}>
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
}
