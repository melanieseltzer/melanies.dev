import { kebabCase } from '../../utils/case';
import { SchemaFieldDefs } from '../config/types';
import { getLastModifiedFromGit, getSlugFromFileName } from '../config/utils';

export const blogSchema = {
  fields: {
    title: { type: 'string', required: true },
    summary: { type: 'string', required: true },
    date: { type: 'date', required: true },
    tags: { type: 'list', required: true, of: { type: 'string' } },
    draft: { type: 'boolean' },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: getSlugFromFileName,
    },

    lastModified: {
      type: 'string',
      resolve: getLastModifiedFromGit,
    },

    // This takes all the tags defined in the frontmatter (list of strings) and automatically
    // derives slugs for them (saving us having to do it each time we consume them).
    // This ultimately changes the type of the field from `string[]` (in the frontmatter)
    // to `Tag[]` which will be consumed everywhere.
    tags: {
      type: 'list',
      resolve: doc =>
        // For some reason, the actual value of `tags` here is a PlainArr.
        // I don't really care to figure out the typing for that, hence the ignores :/
        // ref: https://github.com/contentlayerdev/contentlayer/issues/150

        /* eslint-disable*/
        // @ts-ignore
        doc.tags._array.map((tag: string) => ({
          displayName: tag,
          slug: kebabCase(tag),
        })),
      /* eslint-enable  */
    },
  },
} satisfies SchemaFieldDefs<'BlogPost'>;

// ==============================
// Schema types
// ==============================

export type BlogPostSourceFields = keyof (typeof blogSchema)['fields'];

export type BlogPostComputedFields =
  keyof (typeof blogSchema)['computedFields'];
