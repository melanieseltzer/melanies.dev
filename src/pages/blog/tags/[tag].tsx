import { ParsedUrlQuery } from 'querystring';

import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

import { PageIntro } from '~/components/PageIntro';
import { SEO } from '~/components/seo';

import {
  findPostsWithTag,
  getAllBlogPostTags,
  getBlogPostMetadata,
} from '~/content/blog/client';
import { PostList } from '~/content/blog/components/PostList';
import type { BlogPostMetadata } from '~/content/blog/types';
import { sortByNewestFirst } from '~/content/blog/utils';

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
        subheading={`${count} ${count === 1 ? 'post' : 'posts'} tagged:`}
      />

      <PostList posts={posts} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  const posts = getBlogPostMetadata();
  const { tags } = getAllBlogPostTags(posts);

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
  const postsWithTag = findPostsWithTag(posts, tag);

  return {
    props: { tag, posts: postsWithTag },
  };
};
