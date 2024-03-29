import type { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';
import { Analytics } from '@vercel/analytics/react';

import { PageLayout } from '~/components/layout/PageLayout';

import { siteConfig } from '~/config/site';
import { clsxm } from '~/utils/clsxm';

import { fontSans } from './fonts';
import { RootProviders } from './providers';

import '~/styles/globals.css';
import '@code-hike/mdx/dist/index.css';

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: siteConfig.defaultMetaTitle,
  description: siteConfig.defaultMetaDescription,
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
  openGraph: {
    title: siteConfig.defaultMetaTitle,
    description: siteConfig.defaultMetaDescription,
    url: siteConfig.siteUrl,
    siteName: siteConfig.siteName,
    images: [
      {
        url: siteConfig.images.socialBanner,
        width: 1200,
        height: 600,
        alt: 'Banner for melanies.dev',
      },
    ],
    locale: siteConfig.locale,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    creator: `@${siteConfig.author.social.twitter}`,
  },
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body
        className={clsxm(
          'bg-white font-sans text-gray-500 antialiased dark:bg-gray-900 dark:text-gray-400',
          fontSans.variable
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
