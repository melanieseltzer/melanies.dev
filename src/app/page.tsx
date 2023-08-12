import type { Metadata } from 'next';

import { HeroSection } from '~/components/home/HeroSection';

import { getLatestPosts } from '~/content/blog/client';
import { LatestPosts } from '~/content/blog/components/LatestPosts';
import { MAX_POSTS_DISPLAY } from '~/content/blog/constants';

import { siteMetadata } from '~/config/metadata';

const posts = getLatestPosts({ limit: MAX_POSTS_DISPLAY });

export const metadata: Metadata = {
  alternates: {
    canonical: siteMetadata.siteUrl,
  },
};

export default function Page() {
  return (
    <>
      <HeroSection />

      <LatestPosts posts={posts} />
    </>
  );
}
