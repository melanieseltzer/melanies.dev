import type { MetadataRoute } from 'next';

import { getBlogPosts } from '~/content/blog';
import { getAllProjects } from '~/content/project';

import { siteMetadata } from '~/config/metadata';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date().toISOString().split('T')[0];

  const posts = getBlogPosts().map(({ slug, lastModified }) => ({
    url: `${siteMetadata.siteUrl}/blog/${slug}`,
    lastModified,
  }));

  const projects = getAllProjects()
    .filter(project => !!project.body.raw)
    .map(({ slug }) => ({
      url: `${siteMetadata.siteUrl}/projects/${slug}`,
      lastModified,
    }));

  const routes = ['', '/about', '/blog', '/projects'].map(route => ({
    url: `${siteMetadata.siteUrl}${route}`,
    lastModified,
  }));

  return [...routes, ...posts, ...projects];
}
