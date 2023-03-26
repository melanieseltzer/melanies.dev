import { pick } from 'contentlayer/client';
import { allBlogPosts } from 'contentlayer/generated';

import type {
  BlogPost,
  BlogPostMetadata,
  CLBlogPost,
  CLBlogPostMetadata,
} from '../types';
import { isNotDraft, sortPostsByNew } from '../utils';

// ==============================
// Internal helpers
// ==============================

type Serialized<T> = T extends CLBlogPost ? BlogPost : BlogPostMetadata;

const serialize = <T extends CLBlogPost | CLBlogPostMetadata>(
  post: T
): Serialized<T> =>
  ({
    ...post,
    draft: post.draft || null,
  } as Serialized<T>);

const extractMetadata = (post: CLBlogPost): BlogPostMetadata => {
  const metadata = pick(post, [
    'title',
    'summary',
    'date',
    'tags',
    'lastModified',
    'draft',
    'slug',
    'readingTime',
  ]);

  return serialize(metadata);
};

// ==============================
// Client selectors
// ==============================

export const getBlogPosts = () =>
  // Hacky assertion to get around typing issue with `tags` under the hood :/
  // ref: https://github.com/contentlayerdev/contentlayer/issues/398
  allBlogPosts as unknown as CLBlogPost[];

export const getBlogPost = (slug: string): BlogPost | undefined => {
  const post = getBlogPosts().find(post => post.slug === slug);
  if (!post) return;
  return serialize(post);
};

export const getPostPreviews = (): BlogPostMetadata[] =>
  getBlogPosts().filter(isNotDraft).map(extractMetadata);

export const getLatestPosts = (
  options: { limit?: number } = {}
): BlogPostMetadata[] => {
  const { limit } = options;

  const posts = getBlogPosts().filter(isNotDraft);
  const latestPosts = sortPostsByNew(posts);

  if (limit) {
    return latestPosts.slice(0, limit).map(extractMetadata);
  }

  return latestPosts.map(extractMetadata);
};
