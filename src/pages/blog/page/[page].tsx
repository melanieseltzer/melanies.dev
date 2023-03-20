import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

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

export default function BlogPage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <BlogPostIndexPage posts={posts} tags={allTags} />;
}

export const getStaticPaths: GetStaticPaths = () => {
  // TODO: hardcoded for now until pagination is wired up properly
  const paths = [
    {
      params: { page: '2' },
    },
  ];

  return {
    paths,
    fallback: false,
  };
};

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
