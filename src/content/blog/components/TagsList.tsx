import clsx from 'clsx';

import { Badge } from '~/components/Badge';
import { Paragraph } from '~/components/Paragraph';

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
      className={clsx('flex flex-wrap', compact ? 'gap-2' : 'gap-3', className)}
    >
      {tags.map(({ slug, displayName }) => (
        <li key={slug}>
          <Badge size={compact ? 'sm' : 'lg'} href={`/blog/tags/${slug}`}>
            {displayName}
          </Badge>
        </li>
      ))}
    </ul>
  );
}
