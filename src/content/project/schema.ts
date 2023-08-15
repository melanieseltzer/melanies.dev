import { SchemaFieldDefs } from '~/config/content/types';
import { getSlugFromFileName } from '~/config/content/utils';

export const projectSchema = {
  fields: {
    title: { type: 'string', required: true },
    summary: { type: 'string', required: true },
    category: {
      description: 'Either "oss" (open source) or "sideproject".',
      type: 'string',
      required: true,
    },
    repoLang: {
      description:
        'The overall main language of the project, e.g. "javascript", "typescript", "css", "html".',
      type: 'string',
      required: true,
    },
    tech: {
      description: 'List of tech that the project was built with.',
      type: 'list',
      of: { type: 'string' },
      required: true,
    },
    repoUrl: { type: 'string', required: true },
    demoUrl: { type: 'string' },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: getSlugFromFileName,
    },
  },
} satisfies SchemaFieldDefs<'Project'>;

// ==============================
// Schema types
// ==============================

export type ProjectSourceFields = keyof (typeof projectSchema)['fields'];

export type ProjectComputedFields =
  keyof (typeof projectSchema)['computedFields'];
