import { Heading } from '~/components/Heading';
import { Link } from '~/components/Link';
import { Paragraph } from '~/components/Paragraph';
import { Spacer } from '~/components/Spacer';

import { BlogPostList } from './BlogPostList';

type Props = {
  posts: {
    slug: string;
    title: string;
    summary: string;
    date: string;
    tags: string[];
  }[];
};

export function LatestPosts({ posts }: Props) {
  return (
    <section>
      <header className="relative">
        <Heading as="h2">Latest Posts</Heading>
        <Paragraph lead>
          A little bit of this and a little bit of that ✍️
        </Paragraph>

        <div className="sm:absolute sm:top-2 sm:right-0 sm:text-right">
          <Link
            href="/blog"
            className="font-medium text-primary-700 transition-colors hover:text-primary-800"
          >
            All posts &rarr;
          </Link>
        </div>
      </header>

      <Spacer size="8" />

      <BlogPostList posts={posts} />
    </section>
  );
}
