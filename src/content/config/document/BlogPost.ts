import { defineDocumentType } from 'contentlayer/source-files';

import { blogSchema } from '../../blog/schema';

export const BlogPost = defineDocumentType(() => ({
  name: 'BlogPost',
  filePathPattern: 'blog/**/*.mdx',
  contentType: 'mdx',
  ...blogSchema,
}));
