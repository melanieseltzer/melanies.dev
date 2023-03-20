// This file mostly contains some re-exports of contentlayer types.
// This allows app imports (of the types) to be decoupled from contentlayer,
// making it easy to switch out the content solution layer if needed.

import type {
  BlogPost as CLBlogPost,
  Page as CLPage,
  Project as CLProject,
} from 'contentlayer/generated';

export type { DocumentTypes } from 'contentlayer/generated';

// Pages

export type Page = CLPage;

export type ConfiguredPage = 'about';

// Blog posts

export type BlogPost = CLBlogPost;

export type BlogPostFrontmatter = Pick<
  BlogPost,
  'title' | 'summary' | 'date' | 'tags' | 'lastmod' | 'draft'
>;

// Projects

export type Project = CLProject;
