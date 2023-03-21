import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { HeroSection } from '~/components/home/HeroSection';
import { LatestPosts } from '~/components/home/LatestPosts';
import { SEO } from '~/components/seo';

import { getBlogPostMetadata, sortByNewestFirst } from '~/lib/blog';
import type { BlogPostMetadata } from '~/types/blog';

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
  const blogMeta = getBlogPostMetadata();
  const posts = sortByNewestFirst(blogMeta);

  return {
    props: { posts },
  };
};
