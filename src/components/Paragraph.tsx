import * as React from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function Paragraph({ className = '', ...props }: Props) {
  const classes = twMerge(`
    mb-4 text-lg font-light text-gray-500 dark:text-gray-400
    ${className}
  `);

  return <p className={classes} {...props} />;
}
