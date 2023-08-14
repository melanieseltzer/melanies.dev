import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';

import { PageIntro } from '~/components/PageIntro';

import {
  getAllBlogTags,
  getLatestPosts,
  getPostPreviews,
  getTag,
  getTaggedPosts,
} from '~/content/blog/client';
import { PostList } from '~/content/blog/components/PostList';
import type { Tag } from '~/content/blog/types';

import { siteMetadata } from '~/config/metadata';

interface Props {
  params: { tag: string };
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const posts = getLatestPosts();
  const tagInfo = getTag(posts, params.tag) as Tag;
  const parentOpenGraph = (await parent).openGraph || {};

  const metaTitle = `Posts about ${tagInfo.displayName}`;

  return {
    title: `${metaTitle} | ${siteMetadata.metaTitle}`,
    openGraph: {
      ...parentOpenGraph,
      title: metaTitle,
    },
  };
}

export const dynamicParams = false;

export function generateStaticParams() {
  const posts = getPostPreviews();
  const allTags = getAllBlogTags(posts);

  return allTags.map(({ slug }) => ({ tag: slug }));
}

export default function BlogTagPage({ params: { tag } }: Props) {
  const posts = getLatestPosts();
  const tagInfo = getTag(posts, tag);

  if (!tagInfo) {
    notFound();
  }

  const allPostsTagged = getTaggedPosts(posts, tag);

  const count = allPostsTagged.length;

  return (
    <>
      <PageIntro
        reverse
        heading={tagInfo.displayName}
        subheading={`${count} ${count === 1 ? 'post' : 'posts'} tagged:`}
      />

      <PostList posts={allPostsTagged} />
    </>
  );
}
