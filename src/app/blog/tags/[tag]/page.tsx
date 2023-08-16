import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';

import { PageIntro } from '~/components/PageIntro';

import {
  getAllBlogPostTags,
  getBlogPostMetadata,
  getLatestBlogPosts,
  getTagBySlug,
  getTaggedPosts,
} from '~/entities/blog-post';

import { siteConfig } from '~/config/site';

import { PostList } from '../../components/PostList';

interface Props {
  params: { tag: string };
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata | undefined> {
  const posts = getLatestBlogPosts();
  const tag = getTagBySlug(posts, params.tag);

  if (!tag) return;

  const parentOpenGraph = (await parent).openGraph || {};

  const metaTitle = `Posts about ${tag.displayName}`;

  return {
    title: `${metaTitle} | ${siteConfig.defaultMetaTitle}`,
    openGraph: {
      ...parentOpenGraph,
      title: metaTitle,
    },
  };
}

export const dynamicParams = false;

export function generateStaticParams() {
  const posts = getBlogPostMetadata();
  const allTags = getAllBlogPostTags(posts);

  return allTags.map(({ slug }) => ({ tag: slug }));
}

export default function BlogTagPage({ params }: Props) {
  const posts = getLatestBlogPosts();
  const tag = getTagBySlug(posts, params.tag);

  if (!tag) {
    notFound();
  }

  const allPostsTagged = getTaggedPosts(posts, params.tag);

  const count = allPostsTagged.length;

  return (
    <>
      <PageIntro
        reverse
        heading={tag.displayName}
        subheading={`${count} ${count === 1 ? 'post' : 'posts'} tagged:`}
      />

      <PostList posts={allPostsTagged} />
    </>
  );
}
