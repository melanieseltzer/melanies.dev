import { defineDocumentType } from 'contentlayer/source-files';

import { blogSchema } from '~/documents/BlogPost/schema';

export const blogPost = defineDocumentType(() => ({
  name: 'BlogPost',
  filePathPattern: 'blog/**/*.mdx',
  contentType: 'mdx',
  ...blogSchema,
}));
