import { defineDocumentType } from 'contentlayer/source-files';

import { projectSchema } from '../../project/schema';

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: 'projects/**/*.mdx',
  contentType: 'mdx',
  ...projectSchema,
}));
