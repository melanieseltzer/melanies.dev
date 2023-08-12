import type { Metadata } from 'next';
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

interface Props {
  params: { tag: string };
}

export function generateMetadata({ params }: Props): Metadata {
  const posts = getLatestPosts();
  const tagInfo = getTag(posts, params.tag) as Tag;

  return {
    title: `${tagInfo.displayName} posts`,
    description: 'Content focusing on React, JavaScript, Node.js, and more.',
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
