import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { HeroSection } from '~/components/home/HeroSection';
import { LatestPosts } from '~/components/home/LatestPosts';
import { SEO } from '~/components/seo';

import { getBlogPostMetadata } from '~/lib/content';
import type { BlogPostMetadata } from '~/types/content';

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
  const posts = getBlogPostMetadata();

  return {
    props: { posts },
  };
};
