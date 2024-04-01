import { Stack, Text } from "@chakra-ui/react";

import Container from "@/components/Container";

import s from "./style.module.scss";

export default function TermsPage(): React.ReactElement {
  return (
    <Container className={s.terms}>
      <Stack gap="24px">
        <Text fontSize={42} fontWeight={600}>
          Term of Service
        </Text>
        <Text
          fontSize={18}
          color="brand.neutral.grey.4"
          lineHeight="110%"
          letterSpacing="-1px"
        >
          These terms apply to your use of the onchainblock.xyz website and
          related services including registration, content, software, and
          applications.
        </Text>
        <Text fontSize={18} fontWeight={600}>
          License and Ownership
        </Text>
        <Text
          fontSize={18}
          color="brand.neutral.grey.4"
          lineHeight="110%"
          letterSpacing="-1px"
        >
          You may only use the Service when clearly adhering to these Terms.
          OnchainBlock owns and reserves all rights to the Content provided
          through the Service. You are granted a limited, non-exclusive,
          non-transferable license to use the Service and Content for personal
          or non-commercial purposes. Any other commercial use is prohibited and
          may result in automatic license termination.
        </Text>

        <Text fontSize={18} fontWeight={600}>
          Linking to the Service from Your Website
        </Text>
        <Text
          fontSize={18}
          color="brand.neutral.grey.4"
          lineHeight="110%"
          letterSpacing="-1px"
        >
          You may link to the Service on your website provided that: Your
          website does not contain unlawful or inappropriate content. No
          information on your website creates a false impression about linking
          to OnchainBlock.
        </Text>
        <Text
          fontSize={18}
          color="brand.neutral.grey.4"
          lineHeight="110%"
          letterSpacing="-1px"
        >
          We may withdraw consent for any link without prior notice.
        </Text>
        <Text
          fontSize={18}
          color="brand.neutral.grey.4"
          lineHeight="110%"
          letterSpacing="-1px"
        >
          If requested, you must remove the link from your website within three
          business days.
        </Text>
        <Text fontSize={18} fontWeight={600}>
          Data Rights
        </Text>
        <Text
          fontSize={18}
          color="brand.neutral.grey.4"
          lineHeight="110%"
          letterSpacing="-1px"
        >
          OnchainBlock has the right to use and store data from the use of the
          Service for product development and internal research, including data
          analytics. If required by law, data will be anonymized to protect the
          personal information of registrants and users. OnchainBlock is also
          allowed to use the registrant&apos;s company logo on the website.
        </Text>
        <Text fontSize={18} fontWeight={600}>
          Website Modifications
        </Text>
        <Text
          fontSize={18}
          color="brand.neutral.grey.4"
          lineHeight="110%"
          letterSpacing="-1px"
        >
          At any time and at OnchainBlock&apos;s discretion, we may change,
          suspend, or terminate the provision of the Service and/or Content
          without prior notice, for any reason. We are not legally responsible
          to you or any third party for any such changes, suspensions, or
          terminations.
        </Text>
      </Stack>
    </Container>
  );
}
