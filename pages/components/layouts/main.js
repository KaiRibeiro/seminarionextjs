import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "../navbar";

export default function Main({ children, router}) {

  return (
    <Box as='main' pb={8}>
      <Head>
        <title>Exemplo Blog - NextJs</title>
        <meta name="viewport" content="width-device-width, initial-scale=1" />
      </Head>

      {router.asPath != '/' && (
        <Navbar path={router.asPath} />
      )}

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  );
}