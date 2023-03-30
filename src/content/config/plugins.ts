import { createRequire } from 'module';

import { remarkCodeHike } from '@code-hike/mdx';
import { s } from 'hastscript';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePresetMinify from 'rehype-preset-minify';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import type { Pluggable } from 'unified';

const require = createRequire(import.meta.url);
const theme = require('shiki/themes/github-dark.json') as unknown;

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

export const rehypePlugins: Pluggable[] = [
  rehypeSlug,
  [
    rehypeAutolinkHeadings,
    {
      behavior: 'append',
      properties: {
        class:
          'autolink ml-2 font-light text-gray-400 dark:text-gray-400 no-underline opacity-0 transition-opacity hover:text-gray-500 dark:hover:text-gray-300',
        ariaLabel: 'Anchor',
      },
      content: [
        s(
          'span',
          {
            ariaHidden: 'true',
          },
          '#'
        ),
      ],
    },
  ],
  rehypePresetMinify,
];
