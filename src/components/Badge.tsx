import clsx from 'clsx';

import { Link } from './Link';

type Props = {
  children: React.ReactNode;
  href?: string;
  size?: keyof typeof sizes;
};

const sizes = {
  sm: 'text-xs py-1 px-2',
  lg: 'text-base py-1.5 px-3',
};

export function Badge({ children, href, size = 'lg' }: Props) {
  const classes = clsx(
    'rounded bg-primary-50 text-primary-700 dark:bg-primary-700 dark:text-white',
    href && 'hover:bg-primary-100 dark:hover:bg-primary-800',
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
