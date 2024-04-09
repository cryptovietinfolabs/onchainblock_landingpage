import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";
interface ContactEmailProps {
  authorName: string;
  authorMail: string;
  message: string;
}

export const ContactEmail = ({
  authorName,
  authorMail,
  message,
}: ContactEmailProps): React.ReactElement => {
  const previewText = `Read ${authorName}'s review`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>

      <Body style={main}>
        <Container style={container}>
          <Section style={{ paddingBottom: "20px" }}>
            <Section style={logo}>
              <Img
                src="/logos/logo.svg"
                style={{
                  width: "250px",
                }}
              />
            </Section>
            <Row>
              <Text style={heading}>Here&apos;s what {authorName} wrote</Text>
              <Text style={review}>{message}</Text>
              <Link style={link} href={`mailto:${authorMail}`}>
                {authorMail}
              </Link>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactEmail;

const logo = {
  display: "flex",
  width: "100%",
  justifyContent: "center",
  marginBottom: "32px",
};

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
  maxWidth: "100%",
};

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
};

const review = {
  ...paragraph,
  padding: "24px",
  backgroundColor: "#f2f3f3",
  borderRadius: "4px",
};

const link = {
  ...paragraph,
  color: "#2B8AC9",
  display: "block",
};
