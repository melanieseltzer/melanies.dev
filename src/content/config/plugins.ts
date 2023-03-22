import rehypePresetMinify from 'rehype-preset-minify';
import remarkGfm from 'remark-gfm';
import type { Pluggable } from 'unified';

export const remarkPlugins: Pluggable[] = [remarkGfm];

export const rehypePlugins: Pluggable[] = [rehypePresetMinify];
