import { defineDocumentType } from 'contentlayer/source-files';

import { SchemaFieldDefs } from '../types';
import { getSlugFromFileName } from '../utils';

// ==============================
// Schema
// ==============================

const pageSchema = {
  computedFields: {
    slug: {
      type: 'string',
      resolve: getSlugFromFileName,
    },
  },
} satisfies SchemaFieldDefs<'Page'>;

export type PageComputedFields = keyof (typeof pageSchema)['computedFields'];

// ==============================
// Define document
// ==============================

export const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: 'pages/**/*.mdx',
  contentType: 'mdx',
  ...pageSchema,
}));
