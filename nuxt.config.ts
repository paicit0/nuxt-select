export default {
  css: [
    'bootstrap/dist/css/bootstrap.min.css'
  ],

  build: {
    transpile: [],
    postcss: {
      plugins: {
        'postcss-import': {},
        'postcss-url': false,
        autoprefixer: {},
      },
    },
  },

  head: {
    script: [
      {
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js',
        integrity: 'sha384-pprn3073KE6tl6zj1KYnxQw7JtVH8gvJIrEM8f1zzxzIaRB+8zafz4Im3EGyVjHs',
        crossorigin: 'anonymous'
      }
    ]
  },

  compatibilityDate: '2024-10-04'
};