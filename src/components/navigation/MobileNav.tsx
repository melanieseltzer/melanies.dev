import * as React from 'react';
import {
  RxCross1 as CloseIcon,
  RxHamburgerMenu as OpenIcon,
} from 'react-icons/rx';
import { Dialog, Transition } from '@headlessui/react';

import { Link } from '~/components/Link';
import { Spacer } from '~/components/Spacer';

import { routes } from './routes';

export function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex items-center sm:hidden">
      <button
        aria-label="Open Menu"
        className="rounded p-2 text-gray-600 hover:bg-neutral-100 hover:text-gray-900 hover:transition-colors hover:duration-300 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
        onClick={() => setIsOpen(true)}
      >
        <OpenIcon size={24} />
      </button>

      <Transition show={isOpen} as={React.Fragment}>
        <Dialog onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm"
              aria-hidden="true"
            />
          </Transition.Child>

          <Transition.Child
            as={React.Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="fixed top-0 right-0 z-50 flex h-full w-full max-w-[280px] flex-col overflow-y-scroll bg-white p-6 text-gray-900 shadow-2xl dark:bg-gray-900 dark:text-gray-300">
              <button
                className="ml-auto"
                aria-label="Close Menu"
                onClick={() => setIsOpen(false)}
              >
                <CloseIcon size={24} />
              </button>

              <Spacer size="12" />

              <nav>
                <ul className="flex flex-col space-y-6 text-lg font-semibold">
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
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  );
}
