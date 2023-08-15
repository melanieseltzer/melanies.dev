import { defineDocumentType } from 'contentlayer/source-files';

import { pageSchema } from '~/content/page/schema';

export const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: 'pages/**/*.mdx',
  contentType: 'mdx',
  ...pageSchema,
}));
