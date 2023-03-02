import { Heading } from '~/components/Heading';
import { BlogPostList } from '~/components/home/BlogPostList';
import { PageIntro } from '~/components/PageIntro';
import { Paragraph } from '~/components/Paragraph';
import { SEO } from '~/components/seo';
import { Spacer } from '~/components/Spacer';
import { TagsList } from '~/components/TagsList';

const posts = [
  {
    slug: '/blog/asdf',
    date: '2022-12-15T15:00:00.000Z',
    title: 'Some blog post title',
    summary:
      'This is a blog post summary. We will be going over some sort of topic.',
    tags: ['react', 'next-js'],
  },
  {
    slug: '/blog/ghjk',
    date: '2022-12-15T15:00:00.000Z',
    title: 'JavaScript is really cool',
    summary:
      'I bet you did not know that JavaScript is the coolest. In this post, we will discuss it. This is an extra long description because I need to see what that looks like.',
    tags: ['javascript'],
  },
];

const allTags = [
  'next-js',
  'react',
  'javascript',
  'next-js',
  'react',
  'javascript',
  'next-js',
  'react',
  'javascript',
  'next-js',
  'react',
  'javascript',
  'next-js',
  'react',
  'javascript',
  'next-js',
  'react',
  'javascript',
  'next-js',
  'react',
  'javascript',
  'next-js',
  'react',
  'javascript',
];

export default function BlogIndex() {
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

        <TagsList tags={allTags} />
      </section>
    </>
  );
}
