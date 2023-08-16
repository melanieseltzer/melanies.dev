import { Heading } from '~/components/Heading';

import type { Tag } from '~/documents/BlogPost';

import { TagsList } from './TagsList';

type Props = {
  tags: Tag[];
};

export function ExploreByTopic({ tags }: Props) {
  return (
    <>
      <Heading id="explore-by-topic" size="sm" as="h2">
        Explore by Topic
      </Heading>

      <TagsList tags={tags} />
    </>
  );
}
