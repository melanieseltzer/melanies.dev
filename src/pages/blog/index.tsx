import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { getPostPreviews } from '~/content/blog/client';
import { BlogPostIndexPage } from '~/content/blog/components/BlogPostIndexPage';
import type { BlogPostMetadata } from '~/content/blog/types';
import { sortByNewestFirst } from '~/content/blog/utils';

export default function BlogIndexPage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <BlogPostIndexPage posts={posts} />;
}

export const getStaticProps: GetStaticProps<{
  posts: BlogPostMetadata[];
}> = () => {
  const posts = getPostPreviews();
  const sorted = sortByNewestFirst(posts);

  return {
    props: { posts: sorted },
  };
};
