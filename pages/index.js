import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { signIn, signOut, useSession } from 'next-auth/client';
import { Redirect } from 'react-dom';

export default function Home() {
  const [session, loadingSession] = useSession();

  if(loadingSession) {
    return <p>Loading...</p>
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Exemplo Blog Seminário</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    {!session && (
      <>
        <button onClick={() => signIn()}></button>
      </>
    )}

    {session && (
      <>

      </>
    )}

    </div>
  )
}
