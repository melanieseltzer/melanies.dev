import { usePathname } from 'next/navigation';

import { Link } from '~/components/Link';

import { clsxm } from '~/utils/clsxm';

import { routes } from './routes';

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden sm:block">
      <ul className="flex space-x-4">
        {routes.map(route => {
          const active = pathname === route.href;

          return (
            <li key={route.title}>
              <Link
                href={route.href}
                className={clsxm(
                  'inline-block rounded px-3 py-2 text-base font-semibold text-gray-600 hover:bg-neutral-100 hover:text-gray-900 hover:transition-colors hover:duration-300 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white',
                  active &&
                    'text-primary-700 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-500'
                )}
              >
                {route.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
