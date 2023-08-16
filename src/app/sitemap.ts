import type { MetadataRoute } from 'next';

import { getBlogPosts } from '~/content/blog';
import { getAllProjects } from '~/content/project';

import { siteConfig } from '~/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date().toISOString().split('T')[0];

  const posts = getBlogPosts().map(({ slug, lastModified }) => ({
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
