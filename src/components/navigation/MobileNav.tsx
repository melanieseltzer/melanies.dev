import * as React from 'react';
import {
  RxCross1 as CloseIcon,
  RxHamburgerMenu as OpenIcon,
} from 'react-icons/rx';
import { Dialog } from '@headlessui/react';

import { Link } from '~/components/Link';
import { Spacer } from '~/components/Spacer';

import { routes } from './routes';

export function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex items-center sm:hidden">
      <button
        aria-label="Open Menu"
        className="rounded p-2 text-gray-600 transition-colors hover:bg-neutral-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
        onClick={() => setIsOpen(true)}
      >
        <OpenIcon size={26} />
      </button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <Dialog.Panel className="fixed top-0 right-0 z-50 flex h-full w-full flex-col overflow-y-scroll bg-white p-6 text-gray-900 dark:bg-gray-900 dark:text-gray-300">
          <button
            className="ml-auto"
            aria-label="Close Menu"
            onClick={() => setIsOpen(false)}
          >
            <CloseIcon size={26} />
          </button>

          <Spacer size="12" />

          <nav>
            <ul className="flex flex-col space-y-6 text-2xl font-semibold">
              {routes.map(route => (
                <li key={route.title}>
                  <Link
                    className="p-2"
                    href={route.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {route.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
}
