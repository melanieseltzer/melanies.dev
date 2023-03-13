import { HiOutlineMail as EmailIcon } from 'react-icons/hi';
import {
  SiGithub as GitHubIcon,
  SiLinkedin as LinkedInIcon,
  SiTwitter as TwitterIcon,
} from 'react-icons/si';

import { Link } from '~/components/Link';
import { Spacer } from '~/components/Spacer';

import { authorMetadata } from '~/config/metadata';

import { MaxWidthContainer } from './MaxWidthContainer';

export function Footer() {
  const sharedIconStyles =
    'transition hover:text-gray-600 dark:hover:text-gray-200 hover:rotate-[-4deg]';

  return (
    <>
      <Spacer size="16" />

      <footer className="text-gray-500 dark:text-gray-400">
        <MaxWidthContainer className="flex flex-col items-center justify-between py-16 sm:flex-row">
          {`© ${new Date().getFullYear()}`} Melanie Seltzer
          <ul className="mt-4 flex items-center space-x-6 sm:mt-0">
            <li>
              <Link
                aria-label="Email me"
                href={`mailto:${authorMetadata.email}`}
              >
                <EmailIcon
                  aria-hidden="true"
                  className={sharedIconStyles}
                  size={28}
                />
              </Link>
            </li>

            <li>
              <Link
                aria-label="View my code on GitHub"
                href={`https://github.com/${authorMetadata.social.github}`}
              >
                <GitHubIcon
                  aria-hidden="true"
                  className={sharedIconStyles}
                  size={24}
                />
              </Link>
            </li>

            <li>
              <Link
                aria-label="Connect with me on LinkedIn"
                href={`https://www.linkedin.com/in/${authorMetadata.social.linkedin}`}
              >
                <LinkedInIcon
                  aria-hidden="true"
                  className={sharedIconStyles}
                  size={24}
                />
              </Link>
            </li>

            <li>
              <Link
                aria-label="Follow me on Twitter"
                href={`https://twitter.com/${authorMetadata.social.twitter}`}
              >
                <TwitterIcon
                  aria-hidden="true"
                  className={sharedIconStyles}
                  size={24}
                />
              </Link>
            </li>
          </ul>
        </MaxWidthContainer>
      </footer>
    </>
  );
}
