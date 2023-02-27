import { clsx } from 'clsx';

import { Link } from '~/components/Link';
import { MaxWidthWrapper } from '~/components/MaxWidthWrapper';
import { DesktopNav } from '~/components/navigation/DesktopNav';

import { useScrollPosition } from '~/hooks/useScrollPosition';

export function Header() {
  const { isTop } = useScrollPosition();

  return (
    <header
      className={clsx(
        'sticky top-0 bg-white dark:bg-black dark:bg-opacity-30',
        isTop ? 'border-none' : 'border-b border-gray-200 dark:border-gray-800'
      )}
    >
      <MaxWidthWrapper>
        <div className="flex justify-between py-6">
          <div>
            <Link href="/">Logo</Link>
          </div>

          <DesktopNav />

          {/* <MobileNav /> */}
        </div>
      </MaxWidthWrapper>
    </header>
  );
}
