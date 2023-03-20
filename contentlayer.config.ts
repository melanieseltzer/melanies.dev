import {
  ComputedFields,
  defineDocumentType,
  FieldDefs,
  makeSource,
} from 'contentlayer/source-files';
import rehypePresetMinify from 'rehype-preset-minify';
import remarkGfm from 'remark-gfm';

import { siteMetadata } from './src/config/metadata';

const sharedComputedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: doc => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
  },
};

const sharedFields: FieldDefs = {
  title: { type: 'string', required: true },
  summary: { type: 'string', required: true },
};

export const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: 'pages/**/*.mdx',
  contentType: 'mdx',
  computedFields: {
    ...sharedComputedFields,
  },
}));

export const BlogPost = defineDocumentType(() => ({
  name: 'BlogPost',
  filePathPattern: 'blog/**/*.mdx',
  contentType: 'mdx',
  fields: {
    ...sharedFields,
    date: { type: 'date', required: true },
    tags: { type: 'list', required: true, of: { type: 'string' } },
    lastmod: { type: 'date', required: true },
    draft: { type: 'boolean' },
  },
  computedFields: {
    ...sharedComputedFields,
  },
}));

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: 'projects/**/*.mdx',
  contentType: 'mdx',
  fields: {
    ...sharedFields,
    techStack: {
      type: 'list',
      of: { type: 'string' },
      required: true,
    },
    repoUrl: { type: 'string', required: true },
    demoUrl: { type: 'string' },
  },
  computedFields: {
    ...sharedComputedFields,
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Page, BlogPost, Project],
  date: {
    timezone: siteMetadata.timezone,
  },
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePresetMinify],
  },
});
