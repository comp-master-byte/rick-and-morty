import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginReactRefresh from 'eslint-plugin-react-refresh';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist', 'node_modules', 'docs', '.idea', 'build']),
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      pluginReact.configs.flat.recommended,
      pluginReactHooks.configs.flat.recommended,
      pluginReactRefresh.configs.vite,
    ],
    plugins: {
      prettier: prettierPlugin,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      // Мой набор правил P.S. буду его дополнять
      eqeqeq: 'warn',
      'react/react-in-jsx-scope': 'off',
      'no-unused-vars': 'warn',

      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          vars: 'all', // проверять все переменные
          args: 'after-used', // проверять аргументы функций
          ignoreRestSiblings: true, // игнорировать ...rest паттерн
        },
      ],

      // Prettier
      ...prettierConfig.rules, // отключаем конфликты с ESLint
      'prettier/prettier': 'off', // ошибки форматирования
    },
  },
]);
