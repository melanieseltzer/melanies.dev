import { BlogPostList } from '~/components/home/BlogPostList';
import { PageIntro } from '~/components/PageIntro';
import { SEO } from '~/components/seo';
import { Spacer } from '~/components/Spacer';

const posts = [
  {
    slug: '/blog/asdf',
    date: '2022-12-15T15:00:00.000Z',
    title: 'Some blog post title',
    summary:
      'This is a blog post summary. We will be going over some sort of topic.',
  },
  {
    slug: '/blog/ghjk',
    date: '2022-12-15T15:00:00.000Z',
    title: 'JavaScript is really cool',
    summary:
      'I bet you did not know that JavaScript is the coolest. In this post, we will discuss it. This is an extra long description because I need to see what that looks like.',
  },
];

export default function BlogIndex() {
  return (
    <>
      <SEO
        title="Blog"
        description="Content focusing on React, JavaScript, Node.js, and more."
      />

      <PageIntro
        title="All Posts"
        description="Thoughts, mental models, and notes on all things dev ✍️"
      />

      <BlogPostList posts={posts} />

      <Spacer size="16" />
    </>
  );
}
