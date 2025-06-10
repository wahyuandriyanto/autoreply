module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'next/core-web-vitals',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint'],
  settings: {
    react: {
      version: 'detect',
    },
    next: {
      rootDir: ['src/'],
    },
  },
  rules: {
    // Basic rules
    'no-var': 'error',
    'prefer-const': 'error',
    'no-console': 'warn',
    'no-debugger': 'warn',
    
    // React rules
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    
    // TypeScript rules
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    
    // Next.js rules
    '@next/next/no-html-link-for-pages': 'error',
    '@next/next/no-sync-scripts': 'error',
    '@next/next/no-img-element': 'off',
  },
  ignorePatterns: [
    '.next',
    'node_modules',
    'public',
    '*.md',
    '*.mdx',
    '*.html',
    '*.json',
    '*.lock',
    '*.toml',
    '*.yaml',
    '*.yml',
    'next-env.d.ts',
    'next.config.*',
    '**/*.d.ts',
  ],
};
