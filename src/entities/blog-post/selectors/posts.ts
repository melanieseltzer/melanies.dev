import { pick } from 'contentlayer/client';
import { allBlogPosts } from 'contentlayer/generated';

import type {
  BlogPost,
  BlogPostMetadata,
  CLBlogPost,
  CLBlogPostMetadata,
} from '../types';
import { sortPostsByNew } from '../utils';

// ==============================
// Internal helpers
// ==============================

type Serialized<T> = T extends CLBlogPost ? BlogPost : BlogPostMetadata;

const serialize = <T extends CLBlogPost | CLBlogPostMetadata>(
  post: T
): Serialized<T> =>
  ({
    ...post,
    showLastModified: post.showLastModified ?? true,
  } as Serialized<T>);

const extractMetadata = (post: CLBlogPost): BlogPostMetadata => {
  const metadata = pick(post, [
    'title',
    'summary',
    'date',
    'tags',
    'lastModified',
    'showLastModified',
    'slug',
    'readingTime',
  ]);

  return serialize(metadata);
};

// ==============================
// Client selectors
// ==============================

export const getAllBlogPosts = () =>
  // Hacky assertion to get around typing issue with `tags` under the hood :/
  // ref: https://github.com/contentlayerdev/contentlayer/issues/398
  allBlogPosts as unknown as CLBlogPost[];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  const post = getAllBlogPosts().find(post => post.slug === slug);
  if (!post) return;
  return serialize(post);
};

export const getBlogPostMetadata = (): BlogPostMetadata[] =>
  getAllBlogPosts().map(extractMetadata);

export const getLatestBlogPosts = (
  options: { limit?: number } = {}
): BlogPostMetadata[] => {
  const { limit } = options;

  const posts = getAllBlogPosts();
  const latestPosts = sortPostsByNew(posts);

  if (limit) {
    return latestPosts.slice(0, limit).map(extractMetadata);
  }

  return latestPosts.map(extractMetadata);
};
