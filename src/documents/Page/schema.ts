import { SchemaFieldDefs } from '../types';
import { getSlugFromFileName } from '../utils';

export const pageSchema = {
  computedFields: {
    slug: {
      type: 'string',
      resolve: getSlugFromFileName,
    },
  },
} satisfies SchemaFieldDefs<'Page'>;

// ==============================
// Schema types
// ==============================

export type PageComputedFields = keyof (typeof pageSchema)['computedFields'];
