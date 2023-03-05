import { PostTagsList } from '~/components/blog/PostTagsList';
import { Card } from '~/components/Card';
import { Heading } from '~/components/Heading';
import { Spacer } from '~/components/Spacer';

type Props = {
  tags: string[];
};

export function ExploreByTopic({ tags }: Props) {
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
