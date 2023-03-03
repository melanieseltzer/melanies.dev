import { ExploreByTopic } from '~/components/blog/ExploreByTopic';
import { BlogPostList } from '~/components/home/BlogPostList';
import { PageIntro } from '~/components/PageIntro';
import { SEO } from '~/components/seo';
import { Spacer } from '~/components/Spacer';

type Props = {
  posts: {
    slug: string;
    title: string;
    summary: string;
    date: string;
    tags: string[];
  }[];
  tags: string[];
};

export function BlogPostIndexPage({ posts, tags }: Props) {
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

      <BlogPostList posts={posts} />

      <Spacer size="16" />

      <ExploreByTopic tags={tags} />
    </>
  );
}
