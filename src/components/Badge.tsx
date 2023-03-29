import clsx from 'clsx';

import { Link } from './Link';

type Props = {
  children: React.ReactNode;
  href?: string;
  size?: keyof typeof sizes;
};

const sizes = {
  sm: 'text-xs py-1 px-2 rounded-full',
  lg: 'text-base py-1.5 px-3 rounded-md',
};

export function Badge({ children, href, size = 'lg' }: Props) {
  const classes = clsx(
    'font-semibold',
    href && 'bg-primary-50 text-primary-700 hover:bg-primary-100',
    !href && 'bg-secondary-100 text-secondary-600',
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
