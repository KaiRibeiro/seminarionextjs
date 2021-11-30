import Head from "next/head";
import styles from "../styles/Home.module.css";
import { IconButton } from "@chakra-ui/button";
import { signIn, signOut, useSession } from "next-auth/client";
import {
  Spinner,
  Flex,
  Heading,
  Button,
  Box,
  Container,
  Image,
  text,
} from "@chakra-ui/react";
import Layout from "./components/layouts/article";
import Paragraph from "./components/paragraph";

export default function Home() {
  const [session, loadingSession] = useSession();

  if (loadingSession) {
    <main className={styles.main}>
      <Heading>Exemplo Blog Seminário</Heading>
      <Flex
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
        maxW="800px"
        mt="10"
      >
        <Box>
          <Flex>
            <Heading mr="10" as="h3">
              Carregando...
            </Heading>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </Flex>
        </Box>
      </Flex>
    </main>;
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Exemplo Blog Seminário</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!session && (
        <>
          <Layout title="Login">
            <Container align="center">
              <Box display={{ md: "flex" }} align="center">
                <Box flexGrow={1} color="white" mb={20}>
                  <Heading as="h2" variant="page-title">
                    Seminário NextJs
                  </Heading>
                  <Heading as="h2" variant="page-title">
                    Exemplo Blog
                  </Heading>
                  <p>
                    Programação Web 2 - Universidade Tecnológica Federal do
                    Paraná
                  </p>
                </Box>
              </Box>

              <Box
                borderRadius="lg"
                color="white"
                bg="whiteAlpha.200"
                p={3}
                mb={6}
                align="center"
              >
                <Heading as="h2" fontSize={20}>
                  NextAuth.js
                </Heading>
                <Image
                  borderColor="whiteAlpha.800"
                  boxSize="100px"
                  display="inline-block"
                  src="/images/nextauth.png"
                  alt="Next Auth Image"
                />
                <Paragraph>
                  NextAuth. js é uma solução completa de autenticação open
                  source para aplicações Next.js.
                </Paragraph>
              </Box>

              <Box flexGrow={1} color="white" mb={20}>
                <Heading as="h4">Login Google</Heading>
                <IconButton
                  icon={
                    <Image
                      boxSize="60px"
                      display="inline-block"
                      src="/images/google.png"
                      alt="Next Js Image"
                    />
                  }
                  aria-label="Login"
                  color="black"
                  size={50}
                  onClick={() => signIn("google", { callbackUrl: "/home" })}
                ></IconButton>
              </Box>
            </Container>
          </Layout>
        </>
      )}

      {session && (
        <>
          <Button onClick={() => signOut()}>Sair</Button>
        </>
      )}
    </div>
  );
}
