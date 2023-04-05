import * as React from 'react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';

NProgress.configure({
  minimum: 0.3,
  showSpinner: false,
});

export function RouteProgressBar() {
  const router = useRouter();

  const onStart = () => NProgress.start();
  const onEnd = () => NProgress.done(true);

  React.useEffect(() => {
    router.events.on('routeChangeStart', onStart);
    router.events.on('routeChangeComplete', onEnd);
    router.events.on('routeChangeError', onEnd);

    return () => {
      router.events.off('routeChangeStart', onStart);
      router.events.off('routeChangeComplete', onEnd);
      router.events.off('routeChangeError', onEnd);
    };
  }, [router]);

  return null;
}
