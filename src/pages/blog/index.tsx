import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { getBlogPostMetadata } from '~/lib/content';
import type { BlogPostMetadata } from '~/types/content';
import { BlogPostIndexPage } from '~/views/BlogPostIndexPage';

const allTags = [
  'next-js',
  'react',
  'javascript',
  'next-js',
  'react',
  'javascript',
  'next-js',
  'react',
  'javascript',
  'next-js',
  'react',
  'javascript',
  'next-js',
  'react',
  'javascript',
  'next-js',
  'react',
  'javascript',
  'next-js',
  'react',
  'javascript',
  'next-js',
  'react',
  'javascript',
];

export default function BlogIndexPage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <BlogPostIndexPage posts={posts} tags={allTags} />;
}

export const getStaticProps: GetStaticProps<{
  posts: BlogPostMetadata[];
}> = () => {
  const posts = getBlogPostMetadata();

  return {
    props: {
      posts,
    },
  };
};
