import { twMerge } from 'tailwind-merge';

export type CardProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
};

export function Card({
  children,
  as: Tag = 'div',
  className,
  ...props
}: CardProps) {
  const classes = twMerge(
    'block rounded border p-4 sm:p-8 border-gray-200 dark:border-gray-800',
    className
  );

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
}
