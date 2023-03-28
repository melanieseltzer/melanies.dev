import * as React from 'react';
import { BsMoonStars as DarkIcon } from 'react-icons/bs';
import { HiOutlineSun as LightIcon } from 'react-icons/hi';
import { useTheme } from 'next-themes';

export function ThemeSwitch() {
  const [mounted, setMounted] = React.useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  React.useEffect(() => setMounted(true), []);

  // Force respect system theme preference changes.
  // ref: https://github.com/pacocoursey/next-themes/issues/164
  const handleSystemThemeChange = React.useCallback(
    () => setTheme('system'),
    [setTheme]
  );

  React.useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    media.addListener(handleSystemThemeChange);
    return () => media.removeListener(handleSystemThemeChange);
  }, [handleSystemThemeChange]);

  if (!mounted) {
    return null;
  }

  const mode = resolvedTheme === 'dark' ? 'light' : 'dark';

  return (
    <button
      aria-label={`Activate ${mode} mode`}
      className="rounded p-2 text-gray-600 hover:bg-neutral-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
      onClick={() => setTheme(mode)}
    >
      {resolvedTheme === 'dark' ? (
        <DarkIcon size={24} />
      ) : (
        <LightIcon size={24} />
      )}
    </button>
  );
}
