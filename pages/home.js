import { getSession } from "next-auth/client";
import { Container, Box, Heading, Image } from "@chakra-ui/react";
import Section from "./components/section";
import Paragraph from "./components/paragraph";
import Layout from "./components/layouts/article";

export default function Home({ children, user }) {
  return (
    <Layout title="Home">
      <Container>
        <Box
          borderRadius="lg"
          color="white"
          bg="whiteAlpha.200"
          p={3}
          mb={6}
          align="center"
        >
          Olá, bem-vindo ao blog de {user.name}!
        </Box>

        <Box display={{ md: "flex" }}>
          <Box flexGrow={1} color="white">
            <Heading as="h2" variant="page-title">
              Seminário NextJs
            </Heading>
            <p>
              Programação Web 2 - Universidade Tecnológica Federal do Paraná
            </p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              boxSize="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/nextlogo.png"
              alt="Next Js Image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Objetivo
          </Heading>
          <Paragraph>
            Fazer com que cada aluno estude um framework web e ao mesmo tempo
            proporcionar a todos uma visão geral de 6 diferentes frameworks web
            para utilização com o Node Js. Em segundo plano, este trabalho
            também visa explorar habilidades de trabalho em equipe, organização,
            auto capacitação e oratória.
          </Paragraph>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            NextJs
          </Heading>
          <Paragraph>
            Framework React que lhe dá a melhor experiência de desenvolvedor com
            todos as características que você precisa para a produção: hybrid
            static & server rendering, suporte TypeScript, empacotamento
            inteligente, pré-encaminhamento de rotas, e muito mais.
          </Paragraph>
        </Section>
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
