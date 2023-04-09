import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { HeroSection } from '~/components/home/HeroSection';
import { SEO } from '~/components/seo';

import { getLatestPosts } from '~/content/blog/client';
import { LatestPosts } from '~/content/blog/components/LatestPosts';
import { MAX_POSTS_DISPLAY } from '~/content/blog/constants';
import type { BlogPostMetadata } from '~/content/blog/types';

import { siteMetadata } from '~/config/metadata';

export default function IndexPage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <SEO canonical={siteMetadata.siteUrl} />

      <HeroSection />

      <LatestPosts posts={posts} />
    </>
  );
}

export const getStaticProps: GetStaticProps<{
  posts: BlogPostMetadata[];
}> = () => {
  const posts = getLatestPosts({ limit: MAX_POSTS_DISPLAY });

  return {
    props: { posts },
  };
};
