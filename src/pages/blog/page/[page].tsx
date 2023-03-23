import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

import { getLatestPosts } from '~/content/blog/client';
import { BlogPostListPage } from '~/content/blog/components/BlogPostListPage';
import type { BlogPostMetadata } from '~/content/blog/types';

export default function BlogPaginationPage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <BlogPostListPage posts={posts} />;
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
  posts: BlogPostMetadata[];
}> = () => {
  const posts = getLatestPosts();

  return {
    props: { posts },
  };
};
