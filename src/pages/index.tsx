import { HeroSection } from '~/components/home/HeroSection';
import { LatestPosts } from '~/components/home/LatestPosts';
import { SEO } from '~/components/seo';
import { Spacer } from '~/components/Spacer';

const posts = [
  {
    slug: '/blog/asdf',
    date: '2022-12-15T15:00:00.000Z',
    title: 'Some blog post title',
    summary:
      'This is a blog post summary. We will be going over some sort of topic.',
    tags: [
      'react',
      'next-js',
      'react',
      'next-js',
      'react',
      'next-js',
      'react',
      'next-js',
    ],
  },
  {
    slug: '/blog/ghjk',
    date: '2022-12-15T15:00:00.000Z',
    title: 'JavaScript is really cool',
    summary:
      'I bet you did not know that JavaScript is the coolest. In this post, we will discuss it. This is an extra long description because I need to see what that looks like.',
    tags: ['javascript'],
  },
];

export default function Home() {
  return (
    <>
      <SEO />

      <Spacer size="32" />

      <HeroSection />

      <Spacer size="32" />

      <LatestPosts posts={posts} />
    </>
  );
}
