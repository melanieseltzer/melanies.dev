import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { getAllBlogPosts } from '~/lib/content';
import { BlogPost } from '~/types/content';
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
  posts: BlogPost[];
}> = () => {
  const posts = getAllBlogPosts();

  return {
    props: {
      posts,
    },
  };
};
