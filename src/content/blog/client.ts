import { allBlogPosts } from 'contentlayer/generated';

import { kebabCase } from '~/utils/case';

import type { BlogPost, BlogPostMetadata } from './types';

export const getBlogPosts = (): BlogPost[] => allBlogPosts;

export const getBlogPost = (slug: string) =>
  getBlogPosts().find(post => post.slug === slug);

export function getBlogPostMetadata() {
  const posts = getBlogPosts();

  const allFrontmatter: BlogPostMetadata[] = [];

  for (const post of posts) {
    const isDraft = !!post.draft;

    if (isDraft) continue;

    allFrontmatter.push({
      title: post.title,
      summary: post.summary,
      tags: post.tags,
      date: post.date,
      lastmod: post.lastmod,
      slug: post.slug,
    });
  }

  return allFrontmatter;
}

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
