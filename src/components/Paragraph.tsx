import * as React from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  children: React.ReactNode;
  className?: string;
  lead?: boolean;
};

const styles = {
  default: 'text-gray-500 dark:text-gray-400',
  lead: 'font-light text-gray-500 dark:text-gray-400 md:text-xl',
};

export function Paragraph({ className = '', lead = false, ...props }: Props) {
  const key = lead ? 'lead' : 'default';
  const classes = twMerge('mb-4 text-lg leading-8', styles[key], className);
  return <p className={classes} {...props} />;
}
