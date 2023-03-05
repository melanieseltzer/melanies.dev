import { PostList } from '~/components/blog/PostList';
import { ButtonLink } from '~/components/ButtonLink';
import { Heading } from '~/components/Heading';
import { Paragraph } from '~/components/Paragraph';
import { Spacer } from '~/components/Spacer';

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
    <section aria-labelledby="latest-posts">
      <header>
        <Heading id="latest-posts" size="md" as="h2">
          Latest Posts
        </Heading>
        <Paragraph lead>
          A little bit of this and a little bit of that ✍️
        </Paragraph>
      </header>

      <Spacer size="8" />

      <PostList posts={posts} />

      <div className="text-right">
        <ButtonLink href="/blog">All posts &rarr;</ButtonLink>
      </div>
    </section>
  );
}
