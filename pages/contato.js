import { getSession } from 'next-auth/client';
import {
  Container,
  Box,
  Heading,
  Image,
  Text,
  SimpleGrid,
} from '@chakra-ui/react';
import Layout from './components/layouts/article';
import { GridItem } from "./components/grid-item";
import Section from "./components/section";
import kaique from "../public/images/kaique.jpg";
import lucas from "../public/images/lucas.jpg";
import tiago from "../public/images/thiago.png";
import { useEffect, useState } from 'react';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Membros({ children, user }) {
  const [users, setUsers] = useState([]);

  useEffect(async () => {
    const res = await fetch('/api/contato');
    const data = await res.json();
    setUsers(data);
  }, []);

  return (
    <Layout title="Contato">
      <Container style={{maxWidth: '100%'}}>
        <Heading as="h3" fontSize={20} mb={4} color="white">
          Contato
        </Heading>

        <SimpleGrid color="white" columns={[1, 1, 2]} gap={6}>
          {users.map((u, index) => (
            <Section delay={0.1}>
              <Heading as="h2" fontSize={20}>{u.name}</Heading>
              <Text fontSize={15}>{u.email}</Text>
          </Section>
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
        destination: '/',
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
