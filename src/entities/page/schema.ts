import { getSlugFromMdxFileName } from '../../utils/filename';
import { SchemaFieldDefs } from '../types';

export const pageSchema = {
  computedFields: {
    slug: {
      type: 'string',
      resolve: doc => getSlugFromMdxFileName(doc._raw.sourceFileName),
    },
  },
} satisfies SchemaFieldDefs<'Page'>;

// ==============================
// Schema types
// ==============================

export type PageComputedFields = keyof (typeof pageSchema)['computedFields'];
