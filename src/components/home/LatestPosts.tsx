import { CompactPostList } from '~/components/blog/CompactPostList';
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
        <Paragraph lead>Sometimes I write about tech ✍️</Paragraph>
      </header>

      <Spacer size="4" />

      <CompactPostList posts={posts} />

      <Spacer size="8" />

      <div className="sm:text-right">
        <ButtonLink href="/blog">
          <span className="sr-only">View</span> All posts &rarr;
        </ButtonLink>
      </div>
    </section>
  );
}
