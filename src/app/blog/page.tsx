import type { Metadata, ResolvingMetadata } from 'next';

import { PageIntro } from '~/components/PageIntro';
import { Section } from '~/components/Section';
import { Spacer } from '~/components/Spacer';

import { getAllBlogTags, getLatestPosts } from '~/content/blog/client';
import { ExploreByTopic } from '~/content/blog/components/ExploreByTopic';
import { PostList } from '~/content/blog/components/PostList';

import { siteMetadata } from '~/config/metadata';

export async function generateMetadata(
  // @ts-ignore throwaway
  _,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const parentOpenGraph = (await parent).openGraph || {};
  const metaDesc = 'Content focusing on React, JavaScript, Node.js, and more.';

  return {
    title: `Blog | ${siteMetadata.metaTitle}`,
    description: metaDesc,
    openGraph: {
      ...parentOpenGraph,
      title: siteMetadata.siteName,
      description: metaDesc,
    },
  };
}

export default function BlogIndexPage() {
  const posts = getLatestPosts();
  const tags = getAllBlogTags(posts);

  return (
    <>
      <PageIntro
        heading="Blog"
        subheading="Thoughts, mental models, and notes on all things dev ✍️"
      />

      <Spacer size="4" />

      <ExploreByTopic tags={tags} />

      <Spacer size="20" />

      <Section id="all-posts" heading="All Posts">
        <PostList posts={posts} />
      </Section>
    </>
  );
}
