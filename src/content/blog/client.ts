import { pick } from 'contentlayer/client';
import { allBlogPosts } from 'contentlayer/generated';

import type {
  BlogPost,
  BlogPostMetadata,
  CLBlogPost,
  CLBlogPostMetadata,
  Tag,
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

export const getAllBlogTags = (posts: BlogPostMetadata[]) => {
  const uniqueTags: Record<string, Tag> = {};

  for (const { tags } of posts.filter(isNotDraft)) {
    for (const tag of tags) {
      if (!(tag.slug in uniqueTags)) {
        uniqueTags[tag.slug] = tag;
      }
    }
  }

  return Object.values(uniqueTags);
};

export const getTaggedPosts = (
  posts: BlogPostMetadata[],
  tag: string
): BlogPostMetadata[] =>
  posts.filter(post => post.tags.map(tag => tag.slug).includes(tag));

export const getTag = (posts: BlogPostMetadata[], slug: string) => {
  const tags = getAllBlogTags(posts);
  return tags.find(tag => tag.slug === slug);
};
