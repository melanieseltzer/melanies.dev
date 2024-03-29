import readingTime from 'reading-time';

import { contentConfig } from '../../config/content';
import { getFileLastModified } from '../../lib/git';
import { getSlugFromMdxFileName, kebabCase } from '../../utils/filename';
import { SchemaFieldDefs } from '../types';

export const blogSchema = {
  fields: {
    title: { type: 'string', required: true },
    summary: { type: 'string', required: true },
    date: { type: 'date', required: true },
    tags: { type: 'list', required: true, of: { type: 'string' } },
    showLastModified: {
      description:
        'Control whether to show "Last Updated" in the blog post UI.',
      type: 'boolean',
    },
  },
  computedFields: {
    readingTime: {
      type: 'string',
      resolve: doc => readingTime(doc.body.raw).text,
    },
    slug: {
      type: 'string',
      resolve: doc => getSlugFromMdxFileName(doc._raw.sourceFileName),
    },
    lastModified: {
      type: 'string',
      resolve: doc => {
        const fullFilePath = `${contentConfig.dirPath}/${doc._raw.sourceFilePath}`;
        return getFileLastModified(fullFilePath) || doc.date;
      },
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
