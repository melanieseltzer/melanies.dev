import type { BlogPost as CLBlogPost } from 'contentlayer/generated';

import type {
  BlogPostComputedFields,
  BlogPostSourceFields,
} from '../config/document/BlogPost';

export type BlogPost = CLBlogPost;

export type BlogPostMetadata = Pick<
  BlogPost,
  BlogPostSourceFields | BlogPostComputedFields
>;
