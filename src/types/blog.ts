import type { BlogPost as CLBlogPost } from 'contentlayer/generated';

import { blogPostFieldDefs } from '../../contentlayer.config';

export type { DocumentTypes } from 'contentlayer/generated';

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
