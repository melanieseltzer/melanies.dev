import { clsx } from 'clsx';

import { Link } from '~/components/Link';
import { DesktopNav } from '~/components/navigation/DesktopNav';
import { MobileNav } from '~/components/navigation/MobileNav';
import { ThemeSwitch } from '~/components/ThemeSwitch';

import { useScrollPosition } from '~/hooks/useScrollPosition';

import { Logo } from './Logo';
import { MaxWidthContainer } from './MaxWidthContainer';

export function Header() {
  const { isTop } = useScrollPosition();

  return (
    <header
      className={clsx(
        'sticky top-0 z-10 bg-white dark:bg-gray-900',
        isTop ? 'border-none' : 'border-b border-gray-200 dark:border-gray-800'
      )}
    >
      <MaxWidthContainer className="flex items-center justify-between py-2">
        <Link href="/" aria-label="Homepage">
          <Logo />
        </Link>

        <div className="flex items-center gap-4 sm:gap-6">
          <DesktopNav />

          <ThemeSwitch />

          <MobileNav />
        </div>
      </MaxWidthContainer>
    </header>
  );
}
