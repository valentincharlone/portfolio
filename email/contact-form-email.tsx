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
  Button,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmailImproved({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from {senderEmail} - Portfolio</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-6 rounded-md">
              <Heading className="leading-tight text-2xl font-semibold mb-4">
                📩 New message from your portfolio
              </Heading>

              <Section className="bg-gray-50 p-4 rounded-md border-l-4 border-gray-400 mb-4">
                <Text className="leading-relaxed">{message}</Text>
              </Section>

              <Hr className="my-4" />

              <Text className="text-gray-700 mb-4">
                <strong>From:</strong> {senderEmail}
              </Text>

              <Section className="text-center">
                <Button
                  href={`mailto:${senderEmail}?subject=Re: Your portfolio message`}
                  className="bg-black text-white px-4 py-2 rounded-md font-medium"
                >
                  Reply to {senderEmail}
                </Button>
              </Section>

            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
