import { CompactPostList } from '~/components/blog/CompactPostList';
import { ButtonLink } from '~/components/ButtonLink';
import { Section } from '~/components/Section';
import { Spacer } from '~/components/Spacer';

import type { BlogPostMetadata } from '~/types/content';

type Props = {
  posts: BlogPostMetadata[];
};

export function LatestPosts({ posts }: Props) {
  return (
    <Section
      id="latest-posts"
      heading="Latest Posts"
      subheading="Sometimes I write about tech ✍️"
    >
      <Spacer size="4" />

      <CompactPostList posts={posts} />

      <Spacer size="8" />

      <div className="sm:text-right">
        <ButtonLink href="/blog">
          <span className="sr-only">View</span> All posts &rarr;
        </ButtonLink>
      </div>
    </Section>
  );
}
