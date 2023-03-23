import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { getLatestPosts } from '~/content/blog/client';
import { BlogPostListPage } from '~/content/blog/components/BlogPostListPage';
import type { BlogPostMetadata } from '~/content/blog/types';

export default function BlogIndexPage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <BlogPostListPage posts={posts} />;
}

export const getStaticProps: GetStaticProps<{
  posts: BlogPostMetadata[];
}> = () => {
  const posts = getLatestPosts();

  return {
    props: { posts },
  };
};
