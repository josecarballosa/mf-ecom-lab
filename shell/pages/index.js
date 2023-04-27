import Head from 'next/head';
import dynamic from 'next/dynamic';
import styles from '../styles/Home.module.css';

const NavRemote = dynamic(() => import('shell/Nav'), {
  ssr: false,
});

const BuyButtonRemote = dynamic(() => import('cart/BuyButton'), {
  ssr: false,
});

export default function () {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home page</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <NavRemote />
        <h1>Home</h1>
        <div>I just got started here! Working hard, hardly working...</div>
        <BuyButtonRemote sku={'t_porsche'} />
      </main>
    </div>
  );
}
