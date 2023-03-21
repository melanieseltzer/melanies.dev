import { ExploreByTopic } from '~/components/blog/ExploreByTopic';
import { PostList } from '~/components/blog/PostList';
import { PageIntro } from '~/components/PageIntro';
import { Section } from '~/components/Section';
import { SEO } from '~/components/seo';
import { Spacer } from '~/components/Spacer';

import type { BlogPostMetadata } from '~/types/blog';

type Props = {
  posts: BlogPostMetadata[];
};

export function BlogPostIndexPage({ posts }: Props) {
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

      <ExploreByTopic posts={posts} />
    </>
  );
}
