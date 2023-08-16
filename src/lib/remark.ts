import { createRequire } from 'module';

import { remarkCodeHike } from '@code-hike/mdx';
import remarkGfm from 'remark-gfm';
import type { Pluggable } from 'unified';

const require = createRequire(import.meta.url);
const theme = require('shiki/themes/dracula.json') as unknown;

export const remarkPlugins: Pluggable[] = [
  remarkGfm,
  [
    remarkCodeHike,
    {
      theme,
      lineNumbers: true,
      showCopyButton: true,
    },
  ],
];
