import type { BlogPost as CLBlogPost } from 'contentlayer/generated';

import { KeysUndefinedToNull } from '~/types/utils';

import type { BlogPostComputedFields, BlogPostSourceFields } from './schema';

export type { CLBlogPost };

export type CLBlogPostMetadata = Pick<
  CLBlogPost,
  BlogPostSourceFields | BlogPostComputedFields
>;

// ==============================
// Serialized types
// ==============================

export type BlogPost = KeysUndefinedToNull<CLBlogPost>;

export type BlogPostMetadata = KeysUndefinedToNull<CLBlogPostMetadata>;
