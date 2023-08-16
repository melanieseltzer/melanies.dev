import type { Metadata } from 'next';

import { HeroSection } from '~/components/home/HeroSection';

import { getLatestPosts } from '~/documents/BlogPost';

import { siteConfig } from '~/config/site';

import { LatestPosts } from './components/LatestPosts';

const MAX_POSTS_DISPLAY = 3;

export const metadata: Metadata = {
  alternates: {
    canonical: siteConfig.siteUrl,
  },
};

export default function Page() {
  const posts = getLatestPosts({ limit: MAX_POSTS_DISPLAY });

  return (
    <>
      <HeroSection />

      <LatestPosts posts={posts} />
    </>
  );
}
