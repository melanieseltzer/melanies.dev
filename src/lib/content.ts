import { allBlogPosts, allPages, allProjects } from 'contentlayer/generated';

import type {
  BlogPost,
  BlogPostMetadata,
  ConfiguredPage,
  DocumentTypes,
  Page,
  Project,
} from '~/types/content';
import { kebabCase } from '~/utils/case';

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

// Projects

export const getProject = (slug: string): Project =>
  findBySlug<Project>(allProjects, slug);

export const getAllProjects = (): Project[] => allProjects;
