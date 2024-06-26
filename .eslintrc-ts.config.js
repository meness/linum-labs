module.exports = {
  extends: [
    'plugin:@next/next/recommended',
    'plugin:jsdoc/recommended-typescript',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react-prefer-function-component/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'import', 'react-hooks', '@tanstack/query', 'jsdoc'],
  rules: {
    'import/extensions': 'off',
    'arrow-body-style': ['warn', 'always'],
    'no-param-reassign': 'off',
    'class-methods-use-this': 'off',
    'no-underscore-dangle': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-console': 'warn',
    curly: 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    'import/order': 'warn',
    '@typescript-eslint/lines-between-class-members': 'warn',
    'array-element-newline': 'off',
    'import/prefer-default-export': 'off',
    'import/newline-after-import': 'warn',
    'jsdoc/require-jsdoc': 'off',
    'jsdoc/require-param': 'off',
    'jsdoc/require-returns': 'off',
    'jsdoc/check-param-names': 'off',
    'default-case': 'off',
    'consistent-return': 'off',
    // #region Specific rules for this project
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    'react/no-danger': 'off',
    'react/require-default-props': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: ['arrow-function'],
        unnamedComponents: ['arrow-function']
      }
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.tsx']
      }
    ],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'jsx-quotes': ['warn', 'prefer-double'],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['tailwind.config.ts']
      }
    ]
    // #endregion
  }
};
