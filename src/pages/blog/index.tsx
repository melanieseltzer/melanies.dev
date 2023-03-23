import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { getLatestPosts } from '~/content/blog/client';
import { BlogPostIndexPage } from '~/content/blog/components/BlogPostIndexPage';
import type { BlogPostMetadata } from '~/content/blog/types';

export default function BlogIndexPage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <BlogPostIndexPage posts={posts} />;
}

export const getStaticProps: GetStaticProps<{
  posts: BlogPostMetadata[];
}> = () => {
  const posts = getLatestPosts();

  return {
    props: { posts },
  };
};
