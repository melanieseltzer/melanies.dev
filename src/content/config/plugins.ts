import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePresetMinify from 'rehype-preset-minify';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import type { Pluggable } from 'unified';

export const remarkPlugins: Pluggable[] = [remarkGfm];

export const rehypePlugins: Pluggable[] = [
  rehypeSlug,
  rehypeAutolinkHeadings,
  rehypePresetMinify,
];
