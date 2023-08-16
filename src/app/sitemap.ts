import type { MetadataRoute } from 'next';

import { getAllBlogPosts } from '~/entities/blog-post';
import { getAllProjects } from '~/entities/project';

import { siteConfig } from '~/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date().toISOString().split('T')[0];

  const posts = getAllBlogPosts().map(({ slug, lastModified }) => ({
    url: `${siteConfig.siteUrl}/blog/${slug}`,
    lastModified,
  }));

  const projects = getAllProjects()
    .filter(project => !!project.body.raw)
    .map(({ slug }) => ({
      url: `${siteConfig.siteUrl}/projects/${slug}`,
      lastModified,
    }));

  const routes = ['', '/about', '/blog', '/projects'].map(route => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified,
  }));

  return [...routes, ...posts, ...projects];
}
