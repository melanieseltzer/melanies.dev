import type { BlogPost as BlogPostOrig } from 'contentlayer/generated';

import { KeysUndefinedToNull } from '~/types/utils';

import type { BlogPostComputedFields, BlogPostSourceFields } from './schema';

export type Tag = {
  displayName: string;
  slug: string;
};

export type CLBlogPost = Omit<BlogPostOrig, 'tags'> & {
  // `tags` has a conflicting type due to defining it in both `fields` and `computedFields`
  // in the schema, so we've omitted it here and forced it to the type we need.
  // ref: https://github.com/contentlayerdev/contentlayer/issues/398
  tags: Tag[];
};

export type CLBlogPostMetadata = Pick<
  CLBlogPost,
  BlogPostSourceFields | BlogPostComputedFields
>;

// ==============================
// Serialized types
// ==============================

export type BlogPost = KeysUndefinedToNull<CLBlogPost>;

export type BlogPostMetadata = KeysUndefinedToNull<CLBlogPostMetadata>;
