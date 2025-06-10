import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

// Basic recommended rules without using the problematic js.configs.recommended
const recommendedRules = {
  'constructor-super': 'error',
  'for-direction': 'error',
  'getter-return': 'error',
  'no-cond-assign': 'error',
  'no-constant-condition': 'warn',
  'no-debugger': 'warn',
  'no-dupe-args': 'error',
  'no-dupe-keys': 'error',
  'no-duplicate-case': 'error',
  'no-empty': ['error', { allowEmptyCatch: true }],
  'no-ex-assign': 'error',
  'no-extra-boolean-cast': 'error',
  'no-func-assign': 'error',
  'no-import-assign': 'error',
  'no-inner-declarations': 'error',
  'no-invalid-regexp': 'error',
  'no-obj-calls': 'error',
  'no-prototype-builtins': 'error',
  'no-setter-return': 'error',
  'no-sparse-arrays': 'error',
  'no-this-before-super': 'error',
  'no-unexpected-multiline': 'error',
  'no-unreachable': 'error',
  'no-unsafe-finally': 'error',
  'no-unsafe-negation': 'error',
  'no-unsafe-optional-chaining': 'error',
  'no-useless-backreference': 'error',
  'require-atomic-updates': 'error',
  'use-isnan': 'error',
  'valid-typeof': 'error'
};

export default [
  // Global ignores
  {
    ignores: [
      '.next',
      'node_modules',
      '*.md',
      '*.mdx',
      '*.html',
      '*.json',
      '*.lock',
      '*.toml',
      '*.yaml',
      '*.yml',
      'package-lock.json',
      'yarn.lock',
      'pnpm-lock.yaml',
      'public/**',
      'next-env.d.ts',
      'next.config.*',
      '**/*.d.ts'
    ]
  },

  // Base configuration for all files
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        React: 'readonly',
        JSX: 'readonly'
      }
    },
    plugins: {
      '@next/next': nextPlugin
    },
    rules: Object.assign({}, {
      // Basic rules
      'no-debugger': 'warn',
      'no-duplicate-imports': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'use-isnan': 'error',
      'valid-typeof': 'error',
      
      // React/Next.js rules
      'react/display-name': 'off',
      'react/no-unescaped-entities': 'off',
      '@next/next/no-img-element': 'off'
    })
  },

  // TypeScript specific configuration
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      '@typescript-eslint': tsPlugin
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: process.cwd(),
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    rules: Object.assign({}, {
      // TypeScript specific rules
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      // Add more TypeScript rules as needed
      '@typescript-eslint/no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }],
      '@typescript-eslint/no-var-requires': 'warn'
    })
  },

  // Next.js specific configuration
  {
    files: ['**/*.tsx', '**/*.ts'],
    rules: Object.assign({}, {
      // Next.js recommended rules
      '@next/next/no-html-link-for-pages': 'error',
      '@next/next/no-sync-scripts': 'error',
      // Core Web Vitals rules
      '@next/next/no-css-tags': 'warn',
      '@next/next/no-img-element': 'off',
      // Avoid duplicate rule
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off'
    }),
    settings: {
      react: {
        version: 'detect'
      },
      next: {
        rootDir: ['src/']
      }
    }
  }
];
