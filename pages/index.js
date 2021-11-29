import Head from "next/head";
import styles from "../styles/Home.module.css";
import { signIn, signOut, useSession } from "next-auth/client";
import { Spinner, Flex, Heading, Button, Box } from "@chakra-ui/react";

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
          <Button onClick={() => signIn("google", { callbackUrl: '/home' })}>
            Entrar
          </Button>
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
