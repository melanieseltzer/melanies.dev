import { Badge } from '~/components/Badge';
import { Paragraph } from '~/components/Paragraph';

import { clsxm } from '~/utils/clsxm';

import { Tag } from '../types';

type Props = {
  tags: Tag[];
  compact?: boolean;
  className?: string;
};

export function TagsList({ tags, compact, className }: Props) {
  if (!tags.length) return <Paragraph>No tags found.</Paragraph>;

  return (
    <ul
      className={clsxm(
        '-mt-3 flex flex-wrap',
        className,

        // Hacky negative margin to provide larger gap to wrapped flex children
        // works in conjunction with the margin on the `li` below.
        // https://stackoverflow.com/a/44523788
        compact ? '-mt-2 gap-2' : '-mt-3 gap-3'
      )}
    >
      {tags.map(({ slug, displayName }) => (
        <li key={slug} className={clsxm(compact ? 'mt-2' : 'mt-3')}>
          <Badge size={compact ? 'sm' : 'lg'} href={`/blog/tags/${slug}`}>
            {displayName}
          </Badge>
        </li>
      ))}
    </ul>
  );
}
