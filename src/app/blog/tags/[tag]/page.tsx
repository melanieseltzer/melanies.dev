import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';

import { PageIntro } from '~/components/PageIntro';

import {
  getAllBlogPostTags,
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
): Promise<Metadata> {
  const tag = getTagBySlug(params.tag);

  if (!tag) notFound();

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
  const tags = getAllBlogPostTags();
  return tags.map(({ slug }) => ({ tag: slug }));
}

export default function BlogTagPage({ params }: Props) {
  const tag = getTagBySlug(params.tag);

  if (!tag) notFound();

  const taggedPosts = getTaggedPosts(params.tag);

  const count = taggedPosts.length;

  return (
    <>
      <PageIntro
        reverse
        heading={tag.displayName}
        subheading={`${count} ${count === 1 ? 'post' : 'posts'} tagged:`}
      />

      <PostList posts={taggedPosts} />
    </>
  );
}
