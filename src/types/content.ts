// This file mostly contains some re-exports of contentlayer types.
// This allows app imports (of the types) to be decoupled from contentlayer,
// making it easy to switch out the content solution layer if needed.

import type {
  BlogPost as CLBlogPost,
  Page as CLPage,
  Project as CLProject,
} from 'contentlayer/generated';

export type { DocumentTypes } from 'contentlayer/generated';

// Fields added by contentlayer internally
export type InternalCLFields = '_id' | '_raw' | 'body' | 'type';

// Pages

export type Page = CLPage;

export type ConfiguredPage = 'about';

// Blog posts

export type BlogPost = CLBlogPost;

// Frontmatter that's defined manually inside the source `.mdx` files
export type BlogPostSourceFields =
  | 'title'
  | 'summary'
  | 'date'
  | 'tags'
  | 'lastmod'
  | 'draft';

// Frontmatter that's computed later on
export type BlogPostComputedFields = 'slug';

export type BlogPostMetadata = Pick<
  BlogPost,
  BlogPostSourceFields | BlogPostComputedFields
>;

// Projects

export type Project = CLProject;
