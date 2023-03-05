import clsx from 'clsx';

import { Badge } from '~/components/Badge';

import { Paragraph } from './Paragraph';

type Props = {
  tags: string[];
  compact?: boolean;
  className?: string;
};

export function TagsList({ tags, compact, className }: Props) {
  if (!tags.length) return <Paragraph>No tags found.</Paragraph>;

  return (
    <ul
      className={clsx('flex flex-wrap', compact ? 'gap-2' : 'gap-3', className)}
    >
      {tags.map(tag => (
        <li key={tag}>
          <Badge size={compact ? 'sm' : 'lg'} href={`/tags/${tag}`}>
            {tag}
          </Badge>
        </li>
      ))}
    </ul>
  );
}
