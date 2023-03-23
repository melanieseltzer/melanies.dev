import { pick } from 'contentlayer/client';
import { allBlogPosts } from 'contentlayer/generated';

import { kebabCase } from '~/utils/case';

import type {
  BlogPost,
  BlogPostMetadata,
  CLBlogPost,
  CLBlogPostMetadata,
} from './types';
import { sortPostsByNew } from './utils';

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
    lastmod: post.lastmod || null,
  } as Serialized<T>);

const extractMetadata = (post: CLBlogPost): BlogPostMetadata => {
  const metadata = pick(post, [
    'title',
    'summary',
    'date',
    'tags',
    'lastmod',
    'draft',
    'slug',
  ]);

  return serialize(metadata);
};

const isNotDraft = (
  post: CLBlogPost | BlogPost | CLBlogPostMetadata | BlogPostMetadata
) => !!post.draft === false;

// ==============================
// Client selectors
// ==============================

export const getBlogPosts = () => allBlogPosts;

export const getBlogPost = (slug: string): BlogPost | undefined => {
  const post = allBlogPosts.find(post => post.slug === slug);
  if (!post) return;
  return serialize(post);
};

export const getPostPreviews = (): BlogPostMetadata[] =>
  allBlogPosts.filter(isNotDraft).map(extractMetadata);

export const getLatestPosts = (
  options: { limit?: number } = {}
): BlogPostMetadata[] => {
  const { limit } = options;

  const posts = allBlogPosts.filter(isNotDraft);
  const latestPosts = sortPostsByNew(posts);

  if (limit) {
    return latestPosts.slice(0, limit).map(extractMetadata);
  }

  return latestPosts.map(extractMetadata);
};

export const getAllBlogPostTags = (posts: BlogPostMetadata[]) => {
  let tags: string[] = [];

  for (const post of posts.filter(isNotDraft)) {
    tags = [...tags, ...post.tags.map(kebabCase)];
  }

  return Array.from(new Set<string>(tags)); // ensure no duplicates
};

export const findPostsWithTag = (
  posts: BlogPostMetadata[],
  tag: string
): BlogPostMetadata[] =>
  posts.filter(post => post.tags.map(tag => kebabCase(tag)).includes(tag));
