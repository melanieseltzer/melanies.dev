import { s } from 'hastscript';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePresetMinify from 'rehype-preset-minify';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import type { Pluggable } from 'unified';

export const remarkPlugins: Pluggable[] = [remarkGfm];

export const rehypePlugins: Pluggable[] = [
  rehypeSlug,
  [
    rehypeAutolinkHeadings,
    {
      behavior: 'append',
      properties: {
        class: 'autolink transition-opacity',
        ariaLabel: 'Anchor',
      },
      content: [
        s(
          'span',
          {
            ariaHidden: 'true',
            className:
              'text-gray-400 hover:text-gray-500 dark:hover:text-gray-300',
          },
          '#'
        ),
      ],
    },
  ],
  rehypePresetMinify,
];
