import * as React from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  className?: string;
  as?: React.ElementType;
  children: React.ReactNode;
};

export function MaxWidthContainer({
  className = '',
  as: Tag = 'div',
  ...props
}: Props) {
  const classes = twMerge('mx-auto max-w-5xl px-4 sm:px-6 xl:px-0', className);

  return <Tag className={classes} {...props} />;
}
