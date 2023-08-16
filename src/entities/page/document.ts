import { defineDocumentType } from 'contentlayer/source-files';

import { pageSchema } from './schema';

export const page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: 'pages/**/*.mdx',
  contentType: 'mdx',
  ...pageSchema,
}));
