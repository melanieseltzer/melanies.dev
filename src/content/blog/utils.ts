import type { CLBlogPost } from './types';

export const sortPostsByNew = (posts: CLBlogPost[]): CLBlogPost[] =>
  [...posts] // prevent sort mutation on original
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
