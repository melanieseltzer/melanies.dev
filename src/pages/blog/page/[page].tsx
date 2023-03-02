import { BlogPostIndexPage } from '~/views/BlogPostIndexPage';

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

export default function BlogPagination() {
  return <BlogPostIndexPage posts={posts} tags={allTags} />;
}
