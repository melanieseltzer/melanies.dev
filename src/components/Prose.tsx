import { twMerge } from 'tailwind-merge';

type Props = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

export function Prose({ as: Tag = 'div', className = '', children }: Props) {
  const classes = twMerge(
    'prose prose-lg dark:prose-invert dark:prose-dark',
    className
  );

  return <Tag className={classes}>{children}</Tag>;
}
