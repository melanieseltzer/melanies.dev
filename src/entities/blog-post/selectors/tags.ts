import type { Tag } from '../types';

import { getBlogPostMetadata } from './posts';

export const getAllBlogPostTags = () => {
  const posts = getBlogPostMetadata();
  const uniqueTags: Record<string, Tag> = {};

  for (const { tags } of posts) {
    for (const tag of tags) {
      if (!(tag.slug in uniqueTags)) {
        uniqueTags[tag.slug] = tag;
      }
    }
  }

  return Object.values(uniqueTags);
};

export const getTagBySlug = (slug: string) =>
  getAllBlogPostTags().find(tag => tag.slug === slug);

export const getTaggedPosts = (tag: string) =>
  getBlogPostMetadata().filter(post =>
    post.tags.map(tag => tag.slug).includes(tag)
  );
