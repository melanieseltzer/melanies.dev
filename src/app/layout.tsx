import { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';
import { Analytics } from '@vercel/analytics/react';

import { PageLayout } from '~/components/layout/PageLayout';

import { siteMetadata } from '~/config/metadata';
import { clsxm } from '~/utils/clsxm';

import { RootProviders } from './providers';

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: siteMetadata.metaTitle,
  description: siteMetadata.metaDescription,
  icons: {
    icon: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  themeColor: '#fff',
  other: {
    'msapplication-TileColor': '#fff',
  },
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body
        className={clsxm(
          'bg-white text-gray-500 antialiased dark:bg-gray-900 dark:text-gray-400'
        )}
      >
        <Analytics />
        <NextTopLoader />

        <RootProviders>
          <PageLayout>{children}</PageLayout>
        </RootProviders>
      </body>
    </html>
  );
}
