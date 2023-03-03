import { twMerge } from 'tailwind-merge';

type Props = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
};

export function Card({
  children,
  as: Tag = 'div',
  className,
  ...props
}: Props) {
  const classes = twMerge(
    'block rounded-md border p-4 sm:p-8 border-gray-200 dark:border-gray-700',
    className
  );

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
}
