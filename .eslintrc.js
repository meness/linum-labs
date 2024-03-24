module.exports = {
  extends: './.eslintrc-js.config.js',
  overrides: [
    {
      files: ['**/*.json'],
      extends: './.eslintrc-json.config.js'
    },
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: './.eslintrc-ts.config.js'
    }
  ],
  root: true
};
