import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { HeroSection } from '~/components/home/HeroSection';
import { SEO } from '~/components/seo';

import { getPostPreviews } from '~/content/blog/client';
import { LatestPosts } from '~/content/blog/components/LatestPosts';
import type { BlogPostMetadata } from '~/content/blog/types';
import { sortByNewestFirst } from '~/content/blog/utils';

export default function IndexPage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <SEO />

      <HeroSection />

      <LatestPosts posts={posts} />
    </>
  );
}

export const getStaticProps: GetStaticProps<{
  posts: BlogPostMetadata[];
}> = () => {
  const posts = getPostPreviews();
  const sorted = sortByNewestFirst(posts);

  return {
    props: { posts: sorted },
  };
};
