import clsx from 'clsx';

import { Badge } from '~/components/Badge';

import { Paragraph } from './Paragraph';

type Props = {
  tags: string[];
  compact?: boolean;
};

export function TagsList({ tags, compact }: Props) {
  if (!tags.length) return <Paragraph>No tags found.</Paragraph>;

  return (
    <div className={clsx('flex flex-wrap', compact ? 'gap-2' : 'gap-3')}>
      {tags.map(tag => (
        <Badge size={compact ? 'sm' : 'lg'} key={tag} href={`/tags/${tag}`}>
          {tag}
        </Badge>
      ))}
    </div>
  );
}
