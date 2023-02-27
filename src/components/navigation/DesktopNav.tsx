import { Link } from '~/components/Link';

import { routes } from './routes';

export function DesktopNav() {
  return (
    <nav className="hidden sm:block">
      <ul className="flex">
        {routes.map(route => (
          <li key={route.title}>
            <Link href={route.href} className="p-4">
              {route.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
