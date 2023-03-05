import * as React from 'react';
import { twMerge } from 'tailwind-merge';

type Props = React.HTMLAttributes<HTMLHeadingElement> & {
  children: React.ReactNode;
  as?: HeadingLevel;
  className?: string;
};

type HeadingLevel = keyof typeof styles;

const styles = {
  h1: 'text-3xl font-extrabold md:text-4xl lg:text-5xl lg:leading-[3.5rem]',
  h2: 'text-2xl font-bold md:text-3xl lg:text-4xl',
  h3: 'text-lg font-bold md:text-xl lg:text-2xl',
};

export function Heading({ as = 'h1', className = '', ...props }: Props) {
  const Tag = `${as}` as React.ElementType;

  const classes = twMerge(
    'mb-4 text-gray-900 dark:text-white',
    styles[as],
    className
  );

  return <Tag className={classes} {...props} />;
}
