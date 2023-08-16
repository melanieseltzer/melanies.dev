import type { Metadata } from 'next';

import { HeroSection } from '~/components/home/HeroSection';

import { getLatestPosts } from '~/content/blog/client';
import { LatestPosts } from '~/content/blog/components/LatestPosts';
import { MAX_POSTS_DISPLAY } from '~/content/blog/constants';

import { siteConfig } from '~/config/site';

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
