import { HiRss as RSSIcon } from 'react-icons/hi';

import { Spacer } from '~/components/Spacer';

import { authorMetadata } from '~/config/metadata';

import { Link } from '../Link';
import SocialLinks from '../SocialLinks';

import { MaxWidthContainer } from './MaxWidthContainer';

export function Footer() {
  return (
    <>
      <Spacer size="16" />

      <footer className="text-gray-500 dark:text-gray-400">
        <MaxWidthContainer className="flex flex-col items-center justify-between py-16 sm:flex-row">
          <div className="text-sm">{`© ${new Date().getFullYear()} ${
            authorMetadata.name
          }`}</div>

          <div className="mt-4 flex items-center sm:mt-0">
            <SocialLinks />

            <Link
              aria-label="RSS Feed"
              href="/feed.xml"
              className="ml-6 text-gray-700 hover:rotate-[-4deg] hover:text-gray-800 hover:transition-all dark:text-gray-300 dark:hover:text-gray-200"
            >
              <RSSIcon size={24} />
            </Link>
          </div>
        </MaxWidthContainer>
      </footer>
    </>
  );
}
