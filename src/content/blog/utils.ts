import type { BlogPostMetadata } from './types';

export const sortByNewestFirst = (
  posts: BlogPostMetadata[]
): BlogPostMetadata[] =>
  [...posts] // prevent sort mutation on original
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
