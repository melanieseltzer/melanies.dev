import { Heading } from '~/components/Heading';
import { Spacer } from '~/components/Spacer';
import { TagsList } from '~/components/TagsList';

type Props = {
  tags: string[];
};

export function ExploreByTopic({ tags }: Props) {
  return (
    <>
      <section
        aria-labelledby="explore-by-topic"
        className="rounded border p-4 sm:p-8"
      >
        <Heading id="explore-by-topic" as="h2">
          Explore by Topic
        </Heading>

        <Spacer size="4" />

        <TagsList tags={tags} />
      </section>
    </>
  );
}
