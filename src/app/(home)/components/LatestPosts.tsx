import { ButtonLink } from '~/components/ButtonLink';
import { Section } from '~/components/Section';
import { Spacer } from '~/components/Spacer';

import type { BlogPostMetadata } from '~/entities/blog-post';

import { PostListCompact } from './PostListCompact';

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

      <PostListCompact posts={posts} />

      <Spacer size="8" />

      <div className="sm:text-right">
        <ButtonLink href="/blog">
          <span className="sr-only">View</span> All posts &rarr;
        </ButtonLink>
      </div>
    </Section>
  );
}
