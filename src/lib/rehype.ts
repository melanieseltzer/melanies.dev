import { s } from 'hastscript';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePresetMinify from 'rehype-preset-minify';
import rehypeSlug from 'rehype-slug';
import type { Pluggable } from 'unified';

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
