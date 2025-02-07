import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintPluginJest from 'eslint-plugin-jest';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        jest: 'readonly',
        'jest/globals': true,
      },
    },
  },
  {
    files: ['src/**/*.spec.js'],
    plugins: {
      jest: eslintPluginJest,
    },
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    rules: {
      'jest/valid-expect': 'error',
      'jest/no-disabled-tests': 'warn',
    },
  },
  pluginJs.configs.recommended,
];
