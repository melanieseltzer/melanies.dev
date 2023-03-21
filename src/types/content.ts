// This file mostly contains some re-exports of contentlayer types.
// This allows app imports (of the types) to be decoupled from contentlayer,
// making it easy to switch out the content solution layer if needed.

import type {
  BlogPost as CLBlogPost,
  Page as CLPage,
  Project as CLProject,
} from 'contentlayer/generated';

import {
  blogPostFieldDefs,
  pageFieldDefs,
  projectFieldDefs,
} from '../../contentlayer.config';

export type { DocumentTypes } from 'contentlayer/generated';

// Fields added by contentlayer internally
export type InternalCLFields = '_id' | '_raw' | 'body' | 'type';

// Pages

export type Page = CLPage;

export type ConfiguredMDXPage = 'about';

/** Frontmatter fields that are computed later on (not read from the `.mdx` file). */
export type PageComputedField = keyof (typeof pageFieldDefs)['computedFields'];

// Blog posts

export type BlogPost = CLBlogPost;

/** Frontmatter fields that are read from the source `.mdx` file. */
export type BlogPostSourceFields = keyof (typeof blogPostFieldDefs)['fields'];

/** Frontmatter fields that are computed later on (not read from the `.mdx` file). */
export type BlogPostComputedFields =
  keyof (typeof blogPostFieldDefs)['computedFields'];

export type BlogPostMetadata = Pick<
  BlogPost,
  BlogPostSourceFields | BlogPostComputedFields
>;

// Projects

export type Project = CLProject;

/** Frontmatter fields that are read from the source `.mdx` file. */
export type ProjectSourceFields = keyof (typeof projectFieldDefs)['fields'];

/** Frontmatter fields that are computed later on (not read from the `.mdx` file). */
export type ProjectComputedFields =
  keyof (typeof projectFieldDefs)['computedFields'];
