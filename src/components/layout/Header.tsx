import { Link } from '~/components/Link';
import { DesktopNav } from '~/components/navigation/DesktopNav';
import { MobileNav } from '~/components/navigation/MobileNav';
import { ThemeSwitch } from '~/components/ThemeSwitch';

import { useScrollPosition } from '~/hooks/useScrollPosition';
import { clsxm } from '~/utils/clsxm';

import { Spacer } from '../Spacer';

import { Logo } from './Logo';
import { MaxWidthContainer } from './MaxWidthContainer';

export function Header() {
  const { isTop } = useScrollPosition();

  return (
    <>
      <div className="from-10% via-30% to-90% h-2 bg-gradient-to-r from-primary-500 via-secondary-500 to-sky-500" />

      <Spacer size="6" />

      <header
        className={clsxm(
          'sticky top-0 z-10 bg-white py-3 dark:bg-gray-900',
          isTop
            ? 'border-none'
            : 'border-b border-gray-200 dark:border-gray-800'
        )}
      >
        <MaxWidthContainer className="flex items-center justify-between">
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
      <Spacer size="6" />
    </>
  );
}
