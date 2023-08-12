import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';

import { getBlogPost, getBlogPosts } from '~/content/blog/client';

import { siteMetadata } from '~/config/metadata';

import { BlogPostPage } from './BlogPostPage';

interface Props {
  params: { slug: string };
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata | undefined> {
  const post = getBlogPost(params.slug);

  if (!post) {
    return;
  }

  const { title, summary, date, lastModified, tags, slug } = post;
  const parentOpenGraph = (await parent).openGraph || {};

  return {
    title: {
      absolute: title,
    },
    description: summary,
    alternates: {
      canonical: `${siteMetadata.siteUrl}/blog/${slug}`,
    },
    openGraph: {
      ...parentOpenGraph,
      title,
      description: summary,
      type: 'article',
      publishedTime: date,
      modifiedTime: lastModified,
      url: `${siteMetadata.siteUrl}/blog/${slug}`,
      tags: tags.map(tag => tag.displayName),
    },
  };
}

export const dynamicParams = false;

export function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map(({ slug }) => ({ slug }));
}

export default function Page({ params }: Props) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return <BlogPostPage post={post} />;
}
