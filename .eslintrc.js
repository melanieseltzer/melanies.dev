module.exports = {
  extends: [
    '@mels/base',
    '@mels/typescript',
    '@mels/react',
    '@mels/react/jsx-runtime',
    '@mels/jest',
    'next/core-web-vitals',
  ],
  overrides: [
    {
      files: ['**/*.ts?(x)'],

      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
};
