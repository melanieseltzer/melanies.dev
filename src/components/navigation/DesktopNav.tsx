import { Link } from '~/components/Link';

import { routes } from './routes';

export function DesktopNav() {
  return (
    <nav className="hidden sm:block">
      <ul className="flex space-x-4">
        {routes.map(route => (
          <li key={route.title}>
            <Link
              href={route.href}
              className="rounded px-3 py-2 text-base font-medium text-gray-600 transition-colors hover:bg-neutral-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              {route.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
