import { Heading } from '~/components/Heading';
import { BlogPostList } from '~/components/home/BlogPostList';
import { PageIntro } from '~/components/PageIntro';
import { SEO } from '~/components/seo';
import { Spacer } from '~/components/Spacer';
import { TagsList } from '~/components/TagsList';

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
        title="Blog"
        description="Thoughts, mental models, and notes on all things dev ✍️"
      />

      <BlogPostList posts={posts} />

      <Spacer size="16" />

      <section className="rounded border p-4 sm:p-8">
        <Heading as="h2">Tags</Heading>

        <Spacer size="4" />

        <TagsList tags={tags} />
      </section>
    </>
  );
}
