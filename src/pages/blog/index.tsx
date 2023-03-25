import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { PageIntro } from '~/components/PageIntro';
import { Section } from '~/components/Section';
import { SEO } from '~/components/seo';
import { Spacer } from '~/components/Spacer';

import { getAllBlogTags, getLatestPosts } from '~/content/blog/client';
import { ExploreByTopic } from '~/content/blog/components/ExploreByTopic';
import { PostList } from '~/content/blog/components/PostList';
import type { BlogPostMetadata, Tag } from '~/content/blog/types';

export default function BlogIndexPage({
  posts,
  tags,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <SEO
        title="Blog"
        description="Content focusing on React, JavaScript, Node.js, and more."
      />

      <PageIntro
        heading="Blog"
        subheading="Thoughts, mental models, and notes on all things dev ✍️"
      />

      <Section id="all-posts" heading="All Posts">
        <Spacer size="4" />

        <PostList posts={posts} />
      </Section>

      <Spacer size="16" />

      <ExploreByTopic tags={tags} />
    </>
  );
}

export const getStaticProps: GetStaticProps<{
  posts: BlogPostMetadata[];
  tags: Tag[];
}> = () => {
  const posts = getLatestPosts();
  const tags = getAllBlogTags(posts);

  return {
    props: {
      posts,
      tags,
    },
  };
};
