import { useRouter } from 'next/router';

import { Link } from '~/components/Link';

import { clsxm } from '~/utils/clsxm';

import { routes } from './routes';

export function DesktopNav() {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <nav className="hidden sm:block">
      <ul className="flex space-x-4">
        {routes.map(route => {
          const active = currentRoute === route.href;

          return (
            <li key={route.title}>
              <Link
                href={route.href}
                className={clsxm(
                  'rounded px-3 py-2 text-lg font-medium text-gray-600 transition-colors hover:bg-neutral-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white',
                  active &&
                    'text-primary-700 hover:text-primary-700 dark:text-white dark:hover:text-white'
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
