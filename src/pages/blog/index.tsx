import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { getBlogPostMetadata, sortByNewestFirst } from '~/lib/blog';
import type { BlogPostMetadata } from '~/types/blog';
import { BlogPostIndexPage } from '~/views/BlogPostIndexPage';

export default function BlogIndexPage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <BlogPostIndexPage posts={posts} />;
}

export const getStaticProps: GetStaticProps<{
  posts: BlogPostMetadata[];
}> = () => {
  const blogMeta = getBlogPostMetadata();
  const posts = sortByNewestFirst(blogMeta);

  return {
    props: { posts },
  };
};
