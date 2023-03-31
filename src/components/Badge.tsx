import { clsxm } from '~/utils/clsxm';

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
  const classes = clsxm(
    'font-semibold rounded-md bg-primary-50 text-primary-700 hover:transition-colors hover:duration-300 dark:bg-gray-800 dark:text-primary-400 border border-primary-50 dark:border-primary-700',
    href &&
      'hover:bg-primary-100 hover:border-primary-100 dark:hover:border-primary-600',
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
