import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { HeroSection } from '~/components/home/HeroSection';
import { LatestPosts } from '~/components/home/LatestPosts';
import { SEO } from '~/components/seo';

import { getAllBlogPosts } from '~/lib/content';
import { BlogPost } from '~/types/content';

export const getStaticProps: GetStaticProps<{
  posts: BlogPost[];
}> = () => {
  const posts = getAllBlogPosts();

  return {
    props: {
      posts,
    },
  };
};

export default function Home({
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
