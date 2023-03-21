import { allBlogPosts, allPages, allProjects } from 'contentlayer/generated';

import type {
  BlogPost,
  ConfiguredPage,
  DocumentTypes,
  Page,
  Project,
} from '~/types/content';

function findBySlug<T extends DocumentTypes>(arr: T[], slug: string) {
  return arr.find(doc => doc.slug === slug) as T;
}

// Pages

export const getPage = (slug: ConfiguredPage): Page =>
  findBySlug<Page>(allPages, slug);

// Blog Posts

export const getBlogPost = (slug: string): BlogPost =>
  findBySlug<BlogPost>(allBlogPosts, slug);

export const getAllBlogPosts = (): BlogPost[] => allBlogPosts;

// Projects

export const getProject = (slug: string): Project =>
  findBySlug<Project>(allProjects, slug);

export const getAllProjects = (): Project[] => allProjects;
