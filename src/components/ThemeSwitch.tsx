import * as React from 'react';
import { RxMoon as DarkIcon, RxSun as LightIcon } from 'react-icons/rx';
import { useTheme } from 'next-themes';

export function ThemeSwitch() {
  const [mounted, setMounted] = React.useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

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
    // prevent layout shift when resolving theme
    return <div className="h-10 w-10" />;
  }

  const mode = resolvedTheme === 'dark' ? 'light' : 'dark';

  return (
    <button
      aria-label={`Activate ${mode} mode`}
      className="rounded p-2 text-gray-600 hover:bg-neutral-100 hover:text-gray-900 hover:transition-colors hover:duration-300 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
      onClick={() => setTheme(mode)}
    >
      {resolvedTheme === 'dark' ? (
        <DarkIcon size={20} />
      ) : (
        <LightIcon size={20} />
      )}
    </button>
  );
}
