import { pick } from 'contentlayer/client';
import { allBlogPosts } from 'contentlayer/generated';

import { kebabCase } from '~/utils/case';

import type {
  BlogPost,
  BlogPostMetadata,
  CLBlogPost,
  CLBlogPostMetadata,
} from './types';

// ==============================
// Internal helpers
// ==============================

type Serialized<T> = T extends CLBlogPost ? BlogPost : BlogPostMetadata;

const serialize = <T extends CLBlogPost | CLBlogPostMetadata>(
  post: T
): Serialized<T> =>
  ({
    ...post,
    draft: post.draft || false,
    lastmod: post.lastmod || '',
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

export const getAllBlogPostTags = (posts: BlogPostMetadata[]) => {
  const tags = new Set<string>();
  const count: Record<string, number> = {};

  for (const post of posts) {
    const isDraft = !!post.draft;

    if (isDraft) continue;

    for (const tag of post.tags) {
      const formattedTag = kebabCase(tag);

      tags.add(formattedTag);

      if (formattedTag in count) {
        count[formattedTag] += 1;
      } else {
        count[formattedTag] = 1;
      }
    }
  }

  return {
    tags: Array.from(tags),
    count,
  };
};

export const findPostsWithTag = (
  posts: BlogPostMetadata[],
  tag: string
): BlogPostMetadata[] =>
  posts.filter(post => post.tags.map(tag => kebabCase(tag)).includes(tag));
