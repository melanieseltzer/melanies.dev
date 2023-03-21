import { defineDocumentType } from 'contentlayer/source-files';

import { SchemaFieldDefs } from '../types';
import { getSlugFromFileName } from '../utils';

// ==============================
// Schema
// ==============================

export const projectFieldDefs = {
  fields: {
    title: { type: 'string', required: true },
    summary: { type: 'string', required: true },
    techStack: {
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

export type ProjectSourceFields = keyof (typeof projectFieldDefs)['fields'];

export type ProjectComputedFields =
  keyof (typeof projectFieldDefs)['computedFields'];

// ==============================
// Define document
// ==============================

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: 'projects/**/*.mdx',
  contentType: 'mdx',
  ...projectFieldDefs,
}));
