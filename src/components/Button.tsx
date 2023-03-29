import { twMerge } from 'tailwind-merge';

export type ButtonProps = {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
};

export function Button({
  as: Tag = 'button',
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = twMerge(
    'text-sm rounded-md border border-neutral-200 bg-neutral-50 py-1.5 px-3 text-gray-700 transition-colors hover:bg-neutral-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:text-white dark:border-gray-700 dark:hover:border-gray-500',
    className
  );

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
}
