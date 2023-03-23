import { SchemaFieldDefs } from '../config/types';
import { getSlugFromFileName } from '../config/utils';

export const blogSchema = {
  fields: {
    title: { type: 'string', required: true },
    summary: { type: 'string', required: true },
    date: { type: 'date', required: true },
    tags: { type: 'list', required: true, of: { type: 'string' } },
    lastmod: { type: 'date' },
    draft: { type: 'boolean' },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: getSlugFromFileName,
    },
  },
} satisfies SchemaFieldDefs<'BlogPost'>;

// ==============================
// Schema types
// ==============================

export type BlogPostSourceFields = keyof (typeof blogSchema)['fields'];

export type BlogPostComputedFields =
  keyof (typeof blogSchema)['computedFields'];
