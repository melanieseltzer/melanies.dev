import {
  RxEnvelopeClosed as EmailIcon,
  RxGithubLogo as GitHubIcon,
  RxLinkedinLogo as LinkedInIcon,
  RxTwitterLogo as TwitterIcon,
} from 'react-icons/rx';

import { Link } from '~/components/Link';

import { siteConfig } from '~/config/site';

export default function SocialLinks() {
  const sharedIconStyles =
    'hover:transition-all hover:text-gray-800 dark:hover:text-gray-200 hover:rotate-[-4deg]';

  return (
    <ul className="flex items-center space-x-4 text-gray-700 dark:text-gray-300">
      <li>
        <Link aria-label="Email me" href={`mailto:${siteConfig.author.email}`}>
          <EmailIcon
            aria-hidden="true"
            className={sharedIconStyles}
            size={24}
          />
        </Link>
      </li>

      <li>
        <Link
          aria-label="View my code on GitHub"
          href={siteConfig.author.social.github}
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
          href={siteConfig.author.social.linkedin}
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
          href={siteConfig.author.social.twitter}
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
