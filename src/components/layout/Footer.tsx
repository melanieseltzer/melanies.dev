import { Spacer } from '~/components/Spacer';

import { authorMetadata } from '~/config/metadata';

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

          <div className="mt-4 sm:mt-0">
            <SocialLinks />
          </div>
        </MaxWidthContainer>
      </footer>
    </>
  );
}
