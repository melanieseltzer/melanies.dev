import type {
  BlogPost,
  BlogPostMetadata,
  CLBlogPost,
  CLBlogPostMetadata,
} from './types';

export const sortPostsByNew = (posts: CLBlogPost[]): CLBlogPost[] =>
  [...posts] // prevent sort mutation on original
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

export const isNotDraft = (
  post: CLBlogPost | BlogPost | CLBlogPostMetadata | BlogPostMetadata
) => !!post.draft === false;
