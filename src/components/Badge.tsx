import clsx from 'clsx';

import { Link } from './Link';

type Props = {
  children: React.ReactNode;
  href?: string;
};

export function Badge({ children, href }: Props) {
  const classes = clsx(
    'rounded bg-primary-50 py-1.5 px-3 font-medium text-primary-700',
    href && 'hover:bg-primary-100'
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
