import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { HeroSection } from '~/components/home/HeroSection';
import { SEO } from '~/components/seo';

import { getLatestPosts } from '~/content/blog/client';
import { LatestPosts } from '~/content/blog/components/LatestPosts';
import type { BlogPostMetadata } from '~/content/blog/types';

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
  const posts = getLatestPosts();

  return {
    props: { posts },
  };
};
