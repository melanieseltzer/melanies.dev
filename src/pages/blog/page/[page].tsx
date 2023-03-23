import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

import { getPostPreviews } from '~/content/blog/client';
import { BlogPostIndexPage } from '~/content/blog/components/BlogPostIndexPage';
import type { BlogPostMetadata } from '~/content/blog/types';
import { sortByNewestFirst } from '~/content/blog/utils';

export default function BlogPaginationPage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <BlogPostIndexPage posts={posts} />;
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
  const posts = getPostPreviews();
  const sorted = sortByNewestFirst(posts);

  return {
    props: { posts: sorted },
  };
};
