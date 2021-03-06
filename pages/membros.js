import { getSession } from "next-auth/client";
import {
  Container,
  Box,
  Heading,
  Image,
  SimpleGrid,
  Divider,
} from "@chakra-ui/react";
import Layout from "./components/layouts/article";
import { GridItem } from "./components/grid-item";
import Section from "./components/section";
import kaique from "../public/images/kaique.jpg";
import lucas from "../public/images/lucas.jpg";
import bruno from "../public/images/bruno.jpg";
import tiago from "../public/images/thiago.png";

export default function Membros({ children, user }) {
  return (
    <Layout title="Membros">
      <Container>
        <Heading as="h3" fontSize={20} mb={4} color="white">
          Membros
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.1}>
            <GridItem
              href="https://www.linkedin.com/in/kaiquecampos/"
              title="Kaique Campos"
              thumbnail={kaique}
            />
          </Section>
          <Section delay={0.2}>
            <GridItem
              href="https://github.com/AbyssalSire/"
              title="Lucas Malheiros"
              thumbnail={lucas}
            />
          </Section>
          <Section delay={0.3}>
            <GridItem
              href="https://github.com/TiagoSaggioro/"
              title="Tiago Saggioro"
              thumbnail={tiago}
            />
          </Section>
          <Section delay={0.4}>
            <GridItem
              href="https://github.com/bmendes922/"
              title="Bruno Mendes"
              thumbnail={bruno}
            />
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      user: session.user,
    },
  };
}
