import type { Tag } from '../types';

import { getBlogPostMetadata } from './posts';

export const getAllBlogPostTags = () => {
  const posts = getBlogPostMetadata();
  const uniqueTags = new Set<string>();

  for (const { tags } of posts) {
    for (const tag of tags) {
      uniqueTags.add(JSON.stringify(tag));
    }
  }

  return Array.from(uniqueTags).map(tag => JSON.parse(tag) as Tag);
};

export const getTagBySlug = (slug: string) =>
  getAllBlogPostTags().find(tag => tag.slug === slug);

export const getTaggedPosts = (tag: string) =>
  getBlogPostMetadata().filter(post =>
    post.tags.map(tag => tag.slug).includes(tag)
  );
