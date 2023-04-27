import Head from 'next/head';
import dynamic from 'next/dynamic';
import styles from '../styles/Home.module.css';

const NavRemote = dynamic(() => import('shell/Nav'), {
  ssr: false,
});

export default function () {
  return (
    <div className={styles.container}>
      <Head>
        <title>Product page</title>
        <meta name="description" content="Product page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <NavRemote />
        <h1>Product</h1>
        <div>I'm working on this... Come back later to see the magic!</div>
      </main>
    </div>
  );
}