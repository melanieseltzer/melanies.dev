import type { BlogPostMetadata, Tag } from '../types';

export const getAllBlogTags = (posts: BlogPostMetadata[]) => {
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

export const getTag = (posts: BlogPostMetadata[], slug: string) => {
  const tags = getAllBlogTags(posts);
  return tags.find(tag => tag.slug === slug);
};

export const getTaggedPosts = (
  posts: BlogPostMetadata[],
  tag: string
): BlogPostMetadata[] =>
  posts.filter(post => post.tags.map(tag => tag.slug).includes(tag));
