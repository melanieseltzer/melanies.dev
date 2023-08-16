import { defineDocumentType } from 'contentlayer/source-files';

import { projectSchema } from '~/documents/Project/schema';

export const project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: 'projects/**/*.mdx',
  contentType: 'mdx',
  ...projectSchema,
}));
