import clsx from 'clsx';

import { Link } from './Link';

type Props = {
  children: React.ReactNode;
  href?: string;
  size?: keyof typeof sizes;
};

const sizes = {
  sm: 'text-xs py-1 px-2 rounded-full',
  lg: 'text-base py-1.5 px-3 rounded',
};

export function Badge({ children, href, size = 'lg' }: Props) {
  const classes = clsx(
    'font-semibold bg-primary-50 text-primary-700 dark:bg-gray-800 dark:text-primary-400 dark:border dark:border-primary-700',
    href && 'hover:bg-primary-100 dark:hover:border-primary-600',
    sizes[size]
  );

  if (!href) {
    return <span className={classes}>{children}</span>;
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
