import { HiOutlineMail as EmailIcon } from 'react-icons/hi';
import {
  SiGithub as GitHubIcon,
  SiLinkedin as LinkedInIcon,
  SiTwitter as TwitterIcon,
} from 'react-icons/si';

import { Link } from '~/components/Link';

import { authorMetadata } from '~/config/metadata';

export default function SocialLinks() {
  const sharedIconStyles =
    'hover:transition-all hover:text-gray-800 dark:hover:text-gray-200 hover:rotate-[-4deg]';

  return (
    <ul className="flex items-center space-x-4 text-gray-700 dark:text-gray-300">
      <li>
        <Link aria-label="Email me" href={`mailto:${authorMetadata.email}`}>
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
  );
}
