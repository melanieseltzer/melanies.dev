import { defineDocumentType } from 'contentlayer/source-files';

import { pageSchema } from '~/documents/Page/schema';

export const page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: 'pages/**/*.mdx',
  contentType: 'mdx',
  ...pageSchema,
}));
