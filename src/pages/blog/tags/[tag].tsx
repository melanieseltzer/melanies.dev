import { ParsedUrlQuery } from 'querystring';

import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

import { PostList } from '~/components/blog/PostList';
import { PageIntro } from '~/components/PageIntro';
import { SEO } from '~/components/seo';

import {
  findPostsWithTag,
  getAllBlogPostTags,
  getBlogPostMetadata,
  sortByNewestFirst,
} from '~/lib/content';
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
