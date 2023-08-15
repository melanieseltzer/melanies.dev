import { SchemaFieldDefs } from '~/config/content/types';
import { getSlugFromFileName } from '~/config/content/utils';

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
