```terminal
npx create-next-app shell --javascript --no-eslint
cd shell
npm install @module-federation/nextjs-mf
```

```javascript
// next.config.js
const NextFederationPlugin = require('@module-federation/nextjs-mf');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack: function (config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'shell',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {
          mario: `mario@http://localhost:3001/_next/static/chunks/remoteEntry.js`,
          luigi: `luigi@http://localhost:3002/_next/static/chunks/remoteEntry.js`,
        },
        exposes: {}, // fix: 'No ModuleFederationPlugin(s) found.' error
        extraOptions: {
          automaticAsyncBoundary: true, // `false` by default
        },
      })
    );

    return config;
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
    ],
  },
};

module.exports = nextConfig;
```

```json
//package.json
  "dev": "next dev -p 3000",
```

```javascript
//pages/index.js
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Microfrontends Demo</title>
        <meta name="description" content="Demo for Microfrontends using Module Federation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        Hello! This content is hosted locally.
      </main>
    </div>
  )
}
```

```javascript
//pages/mario.js
import RemoteMario from 'mario/pages/index'

// import dynamic from 'next/dynamic';
// const RemoteMario = dynamic(() => import('mario/pages/index'), {
//   ssr: false,
//   suspense: true,
// });

export default function Mario() {
  return <RemoteMario />;
}
```

```javascript
//pages/luigi.js
import RemoteLuigi from 'luigi/pages/index'

// import dynamic from 'next/dynamic';
// const RemoteLuigi = dynamic(() => import('luigi/pages/index'), {
//   ssr: false,
//   suspense: true,
// });

export default function Luigi() {
  return <RemoteLuigi />;
}
```

```javascript
//pages/_app.js
import '../styles/globals.css';
import Nav from '../components/Nav';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
```

```javascript
//components/nav.js
import Link from 'next/link'
import styles from '../styles/Nav.module.css'

const Nav = () => (
  <div className={styles.nav}>
    <Link href="/mario">Load Mario</Link>
    <Link href="/">Home</Link>
    <Link href="/luigi">Load Luigi</Link>
  </div>
)

export default Nav
```

```css
/* styles/Nav.module.css*/
.nav {
  display: flex;
  justify-content: center;
}

.nav a {
  display: flex;
  background: white;
  width: 250px;
  height: 60px;
  border-radius: 8px;
  border: solid;
  margin: 16px;
  justify-content: center;
  align-items: center;
}
```