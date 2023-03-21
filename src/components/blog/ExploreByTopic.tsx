import { PostTagsList } from '~/components/blog/PostTagsList';
import { Card } from '~/components/Card';
import { Heading } from '~/components/Heading';
import { Spacer } from '~/components/Spacer';

import { getAllBlogPostTags } from '~/lib/blog';
import { BlogPostMetadata } from '~/types/blog';

type Props = {
  posts: BlogPostMetadata[];
};

export function ExploreByTopic({ posts }: Props) {
  const { tags } = getAllBlogPostTags(posts);

  return (
    <>
      <Card as="section" aria-labelledby="explore-by-topic">
        <Heading id="explore-by-topic" size="md" as="h2">
          Explore by Topic
        </Heading>

        <Spacer size="4" />

        <PostTagsList tags={tags} />
      </Card>
    </>
  );
}
