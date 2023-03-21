import { defineDocumentType } from 'contentlayer/source-files';

import { SchemaFieldDefs } from '../types';
import { getSlugFromFileName } from '../utils';

// ==============================
// Schema
// ==============================

const blogSchema = {
  fields: {
    title: { type: 'string', required: true },
    summary: { type: 'string', required: true },
    date: { type: 'date', required: true },
    tags: { type: 'list', required: true, of: { type: 'string' } },
    lastmod: { type: 'date', required: true },
    draft: { type: 'boolean' },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: getSlugFromFileName,
    },
  },
} satisfies SchemaFieldDefs<'BlogPost'>;

export type BlogPostSourceFields = keyof (typeof blogSchema)['fields'];

export type BlogPostComputedFields =
  keyof (typeof blogSchema)['computedFields'];

// ==============================
// Define document
// ==============================

export const BlogPost = defineDocumentType(() => ({
  name: 'BlogPost',
  filePathPattern: 'blog/**/*.mdx',
  contentType: 'mdx',
  ...blogSchema,
}));
