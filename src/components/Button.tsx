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
    'rounded-md border border-neutral-200 bg-neutral-50 py-1.5 px-3 text-gray-700 transition-colors hover:bg-neutral-100',
    className
  );

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
}
