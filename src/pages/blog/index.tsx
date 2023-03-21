import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { getBlogPostMetadata, sortByNewestFirst } from '~/lib/content';
import type { BlogPostMetadata } from '~/types/content';
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
