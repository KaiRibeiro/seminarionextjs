import { getSession } from 'next-auth/client';
import {
  Container,
  Box,
  Heading,
  Image,
  SimpleGrid,
  Divider,
} from '@chakra-ui/react';
import Layout from './components/layouts/article';
import { GridItem } from './components/grid-item';
import Section from './components/section';
import kaique from '../public/images/kaique.jpg';
import lucas from '../public/images/lucas.jpg';
import tiago from '../public/images/thiago.png';
import useSWR from 'swr';
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

        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          {users.map((u, index) => (
            <div
              style={{
                color: 'white',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                margin: '10% 0',
                flex: '1 0 40%',
              }}
            >
              <h2>{u.name}</h2>
              <h2>{u.email}</h2>
            </div>
          ))}
        </div>
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
