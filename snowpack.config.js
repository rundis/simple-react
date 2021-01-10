/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/dist',
  },
  plugins: [
    ['@snowpack/plugin-webpack',
     {
       manifest: true,
     },
    ],
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-typescript'
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    port: 4444,
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
  // Consider when a bit more mature !
  /*experiments: {
    optimize: {
      bundle: true,
      minify: true,
      target: "es2017"
    },
  },*/
};
