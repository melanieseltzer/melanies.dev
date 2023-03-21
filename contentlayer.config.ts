import type { DocumentTypeDef } from 'contentlayer/source-files';
import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypePresetMinify from 'rehype-preset-minify';
import remarkGfm from 'remark-gfm';

import { siteMetadata } from './src/config/metadata';

type SchemaFieldDefs<T extends string> = {
  fields?: DocumentTypeDef<T>['fields'];
  computedFields?: DocumentTypeDef<T>['computedFields'];
};

// ==============================
// Field defs (frontmatter schemas)
// ==============================

const sharedFields = {
  title: { type: 'string', required: true },
  summary: { type: 'string', required: true },
} satisfies DocumentTypeDef['fields'];

const sharedComputedFields = {
  slug: {
    type: 'string',
    resolve: doc => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
  },
} satisfies DocumentTypeDef['computedFields'];

export const pageFieldDefs = {
  computedFields: {
    ...sharedComputedFields,
  },
} satisfies SchemaFieldDefs<'Page'>;

export const blogPostFieldDefs = {
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
} satisfies SchemaFieldDefs<'BlogPost'>;

export const projectFieldDefs = {
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
} satisfies SchemaFieldDefs<'Project'>;

// ==============================
// Define doc types
// ==============================

export const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: 'pages/**/*.mdx',
  contentType: 'mdx',
  ...pageFieldDefs,
}));

// const toc: BlogPostTableOfContents = [];

export const BlogPost = defineDocumentType(() => ({
  name: 'BlogPost',
  filePathPattern: 'blog/**/*.mdx',
  contentType: 'mdx',
  ...blogPostFieldDefs,
}));

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: 'projects/**/*.mdx',
  contentType: 'mdx',
  ...projectFieldDefs,
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
