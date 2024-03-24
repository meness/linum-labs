module.exports = {
  plugins:
    process.env.NODE_ENV === 'production'
      ? [
          ['postcss-import', { path: ['./src/assets/css'] }],
          'tailwindcss',
          [
            'postcss-preset-env',
            {
              minimumVendorImplementations: 2,
              stage: 3,
              features: {
                clamp: true,
                'logical-properties-and-values': true,
                'place-properties': true,
                'system-ui-font-family': true
              },
              autoprefixer: { flexbox: false }
            }
          ],
          [
            'cssnano',
            {
              preset: ['default', { discardComments: { removeAll: true } }]
            }
          ]
        ]
      : [['postcss-import', { path: ['./src/assets/css'] }], 'tailwindcss', ['autoprefixer', { flexbox: false }]]
};
