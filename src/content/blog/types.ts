import type { BlogPost as CLBlogPost } from 'contentlayer/generated';

import type { BlogPostComputedFields, BlogPostSourceFields } from './schema';

export type { CLBlogPost };

export type CLBlogPostMetadata = Pick<
  CLBlogPost,
  BlogPostSourceFields | BlogPostComputedFields
>;

// ==============================
// Serialized types
// ==============================

export type BlogPost = Required<CLBlogPost>;

export type BlogPostMetadata = Required<CLBlogPostMetadata>;
