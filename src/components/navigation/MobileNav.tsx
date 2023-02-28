import * as React from 'react';
import { HiOutlineDotsVertical as OpenIcon } from 'react-icons/hi';
import { IoClose as CloseIcon } from 'react-icons/io5';
import { Dialog } from '@headlessui/react';

import { Link } from '~/components/Link';

import { routes } from './routes';

export function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex items-center sm:hidden">
      <button aria-label="Open Menu" onClick={() => setIsOpen(true)}>
        <OpenIcon size={20} />
      </button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm"
          aria-hidden="true"
        />

        <Dialog.Panel className="fixed top-4 right-4 w-full max-w-xs rounded-lg bg-white p-6 text-base font-semibold text-slate-900 shadow-lg">
          <button
            className="absolute right-4 top-4"
            aria-label="Close Menu"
            onClick={() => setIsOpen(false)}
          >
            <CloseIcon size={30} />
          </button>

          <nav>
            <ul className="flex flex-col">
              {routes.map(route => (
                <li key={route.title} className="py-2">
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
