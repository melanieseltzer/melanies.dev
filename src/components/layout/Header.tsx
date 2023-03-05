import { clsx } from 'clsx';

import { Link } from '~/components/Link';
import { DesktopNav } from '~/components/navigation/DesktopNav';
import { MobileNav } from '~/components/navigation/MobileNav';

import { useScrollPosition } from '~/hooks/useScrollPosition';

import { MaxWidthContainer } from './MaxWidthContainer';

export function Header() {
  const { isTop } = useScrollPosition();

  return (
    <header
      className={clsx(
        'sticky top-0 z-10 bg-white bg-opacity-50 backdrop-blur backdrop-filter',
        isTop ? 'border-none' : 'border-b border-gray-200 dark:border-gray-800'
      )}
    >
      <MaxWidthContainer className="flex items-center justify-between py-4 sm:py-8">
        <Link href="/">Logo</Link>

        <DesktopNav />

        <MobileNav />
      </MaxWidthContainer>
    </header>
  );
}
