const NextFederationPlugin = require('@module-federation/nextjs-mf');

const nextConfig = {
  reactStrictMode: true,

  webpack: function (config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'product',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {
          shell: `shell@http://localhost:3000/_next/static/chunks/remoteEntry.js`,
          // product: `product@http://localhost:3001/_next/static/chunks/remoteEntry.js`,
          cart: `cart@http://localhost:3002/_next/static/chunks/remoteEntry.js`,
        },
        exposes: {}, // fix: 'No ModuleFederationPlugin(s) found.' error
        extraOptions: {
          exposePages: true, // `false` by default
        },
      })
    );

    return config;
  },
};

module.exports = nextConfig;
