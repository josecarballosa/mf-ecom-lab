import Head from 'next/head';
import dynamic from 'next/dynamic';
import styles from '../styles/Home.module.css';

const NavRemote = dynamic(() => import('shell/Nav'), {
  ssr: false,
});

const BuyButtonRemote = dynamic(() => import('cart/BuyButton'), {
  ssr: false,
});

const ClearCartButtonRemote = dynamic(() => import('cart/ClearCartButton'), {
  ssr: false,
});

export default function () {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cart page</title>
        <meta name="description" content="Cart page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <NavRemote />
        <h1>Cart</h1>
        <div>I'm up to something here! I need add more stuff faster...</div>
        <BuyButtonRemote sku={'t_porsche'} />
        <ClearCartButtonRemote />
      </main>
    </div>
  );
}
