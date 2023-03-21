import { allBlogPosts, allPages, allProjects } from 'contentlayer/generated';

import type {
  BlogPost,
  BlogPostMetadata,
  ConfiguredPage,
  DocumentTypes,
  Page,
  Project,
} from '~/types/content';

const findBySlug = <T extends DocumentTypes>(arr: T[], slug: string) =>
  arr.find(doc => doc.slug === slug) as T;

// Pages

export const getPage = (slug: ConfiguredPage): Page =>
  findBySlug<Page>(allPages, slug);

// Blog Posts

export const getBlogPost = (slug: string): BlogPost =>
  findBySlug<BlogPost>(allBlogPosts, slug);

export const getBlogPosts = (): BlogPost[] => allBlogPosts;

export const sortByNewestFirst = (posts: BlogPostMetadata[]) =>
  posts.sort((a, b) => {
    if (a.date > b.date) return -1;
    if (a.date < b.date) return 1;
    return 0;
  });

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

// Projects

export const getProject = (slug: string): Project =>
  findBySlug<Project>(allProjects, slug);

export const getAllProjects = (): Project[] => allProjects;
