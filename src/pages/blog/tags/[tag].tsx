import { ParsedUrlQuery } from 'querystring';

import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

import { PageIntro } from '~/components/PageIntro';
import { SEO } from '~/components/seo';

import {
  getAllBlogTags,
  getLatestPosts,
  getPostPreviews,
  getTag,
  getTaggedPosts,
} from '~/content/blog/client';
import { PostList } from '~/content/blog/components/PostList';
import type { BlogPostMetadata, Tag } from '~/content/blog/types';

export default function TagPage({
  tag,
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const count = posts.length;

  return (
    <>
      <SEO
        title={`${tag.displayName} posts`}
        description="Content focusing on React, JavaScript, Node.js, and more."
      />

      <PageIntro
        compact
        reverse
        heading={tag.displayName}
        subheading={`${count} ${count === 1 ? 'post' : 'posts'} tagged:`}
      />

      <PostList posts={posts} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  const posts = getPostPreviews();
  const tags = getAllBlogTags(posts);

  return {
    paths: tags.map(tag => ({ params: { tag: tag.slug } })),
    fallback: false,
  };
};

interface Params extends ParsedUrlQuery {
  tag: string;
}

type Props = {
  posts: BlogPostMetadata[];
  tag: Tag;
};

export const getStaticProps: GetStaticProps<Props, Params> = ({ params }) => {
  const tag = params!.tag;
  const posts = getLatestPosts();

  return {
    props: {
      // The assertion is okay here, because it's going to 404 on unknown tags
      // due to the `fallback: false` in the getStaticPaths.
      tag: getTag(posts, tag) as Tag,
      posts: getTaggedPosts(posts, tag),
    },
  };
};
