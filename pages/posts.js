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
import { useEffect, useState } from "react";
import Paragraph from "./components/paragraph";


const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Membros({ children, user }) {
  const [users, setUsers] = useState([]);

  useEffect(async () => {
    const res = await fetch("/api/posts");
    const data = await res.json();
    setUsers(data);
  }, []);

  return (
    <Layout title="Posts">
      <Container style={{ maxWidth: "100%" }}>
        <Heading as="h3" fontSize={20} mb={4} color="white">
          Posts
        </Heading>

        <SimpleGrid columns={[1, 1, 3]} gap={6}>
          {users.map((u, index) => (
            <Box color="white">
              <Heading as="h3" mb={5} fontSize={20}>
                {u.name}
              </Heading>
              <Divider orientation="horizontal" />
              <Paragraph>{u.description}</Paragraph>
            </Box>
          ))}
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
