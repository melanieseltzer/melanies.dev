module.exports = {
  extends: [
    '@mels/base',
    '@mels/typescript',
    '@mels/react',
    '@mels/react/jsx-runtime',
    '@mels/jest',
    'next/core-web-vitals',
  ],

  rules: {
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          ['^\\u0000'],
          [
            '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
          ],
          ['^react', '^next', '^@?\\w'],

          // components + modules in their own separate groups first
          ['^(~/components/.*|$)'],
          ['^(~/entities/.*|$)'],

          ['^(~|@|src|app)(/.*|$)'],
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          ['^.+\\.s?css$'],
        ],
      },
    ],
  },

  overrides: [
    {
      files: ['**/*.ts?(x)'],

      parserOptions: {
        project: './tsconfig.json',
      },

      rules: {
        'react/jsx-pascal-case': [
          'warn',
          {
            allowNamespace: true,
            allowAllCaps: true,
          },
        ],
      },
    },
  ],
};
