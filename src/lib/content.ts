import { allBlogPosts, allPages } from 'contentlayer/generated';

import type { BlogPost, ConfiguredPage, Page } from '~/types/content';

export function formatBlogPostSlug(slug: string) {
  return slug.replace(/\.(mdx|md)/, '');
}

export const getPageContent = (slug: ConfiguredPage): Page =>
  allPages.find(page => page.slug === slug) as Page;

export const getBlogPost = (slug: string): BlogPost =>
  allBlogPosts.find(page => page.slug === slug) as BlogPost;

export const getAllBlogPosts = (): BlogPost[] => allBlogPosts;
