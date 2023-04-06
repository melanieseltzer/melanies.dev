import * as React from 'react';
import { twMerge } from 'tailwind-merge';

type Props = React.HTMLAttributes<HTMLHeadingElement> & {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
  size?: keyof typeof styles;
};

const styles = {
  lg: 'text-4xl font-extrabold md:text-5xl lg:leading-[3.5rem]',
  md: 'text-2xl font-bold md:text-3xl',
  sm: 'text-xl font-bold',
};

export function Heading({
  size = 'lg',
  as: Tag = 'h1',
  className = '',
  ...props
}: Props) {
  const classes = twMerge(
    'mb-4 text-gray-900 dark:text-white',
    styles[size],
    className
  );

  return <Tag className={classes} {...props} />;
}
