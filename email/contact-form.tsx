import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";

import { Tailwind } from "@react-email/tailwind";

type ContactFormProps = {
  message: string;
  senderEmail: string;
};
const ContactFormEmail = ({ message, senderEmail }: ContactFormProps) => {
  return (
    <Html>
      <Head />
      <Preview>New Message from Portfolio Website</Preview>
      <Tailwind>
        <Body className="bg-purple-100 text-black">
          <Container>
            <Section className="bg-purple-300 border-slate-500 my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                You received a New Message from Portfolio Website
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender's mail is : {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactFormEmail;
