import { ParsedUrlQuery } from 'querystring';

import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

import { PostList } from '~/components/blog/PostList';
import { PageIntro } from '~/components/PageIntro';
import { SEO } from '~/components/seo';

import { getBlogPostMetadata, sortByNewestFirst } from '~/lib/content';
import type { BlogPostMetadata } from '~/types/content';

export default function TagPage({
  tag,
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const count = posts.length;

  return (
    <>
      <SEO
        title={`${tag} posts`}
        description="Content focusing on React, JavaScript, Node.js, and more."
      />

      <PageIntro
        compact
        reverse
        heading={tag}
        subheading={`${count} posts tagged:`}
      />

      <PostList posts={posts} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  // TODO: hardcoded for now
  const tags = ['react', 'next-js', 'javascript'];

  return {
    paths: tags.map(tag => ({ params: { tag } })),
    fallback: false,
  };
};

interface Params extends ParsedUrlQuery {
  tag: string;
}

type Props = {
  posts: BlogPostMetadata[];
  tag: string;
};

export const getStaticProps: GetStaticProps<Props, Params> = ({ params }) => {
  const tag = params!.tag;
  const blogMeta = getBlogPostMetadata();
  const posts = sortByNewestFirst(blogMeta);
  // TODO: only return posts that have this tag

  return {
    props: { tag, posts },
  };
};
