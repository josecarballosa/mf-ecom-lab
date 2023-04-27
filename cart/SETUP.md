```terminal
npx create-next-app mario --javascript --no-eslint
cd mario
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
        name: 'mario',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {}, // fix: 'No ModuleFederationPlugin(s) found.' error
        extraOptions: {
          exposePages: true, // `false` by default
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
  "dev": "next dev -p 3001",
```

```javascript
//pages/index.js
import Head from 'next/head'
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Micro Front-end Demo App 1</title>
        <meta name="description" content="This is an app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image
          src="https://upload.wikimedia.org/wikipedia/en/a/a9/MarioNSMBUDeluxe.png"
          alt="Mario"
          width={240}
          height={413}
        />
        <h2 className={styles.title}>G'day! I'm Mario, a micro front-end.</h2>
      </main>
    </div>
  );
}
```
