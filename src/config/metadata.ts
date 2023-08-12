export const authorMetadata = {
  name: 'Melanie Seltzer',
  email: 'melanie.seltzer1@gmail.com',
  occupation: 'Software Engineer',
  social: {
    github: 'melanieseltzer',
    twitter: 'melanieseltzer',
    linkedin: 'melanieseltzer',
  },
};

const SITE_URL = 'https://www.melanies.dev';

export const siteMetadata = {
  siteUrl: SITE_URL,
  siteName: 'Developer blog of Melanie Seltzer',
  metaTitle: authorMetadata.name,
  metaDescription:
    'Developer blog of Melanie Seltzer, a Senior Software Engineer specializing in front-end development.',
  locale: 'en-US',
  timezone: 'America/Los_Angeles',
  images: {
    socialBanner: SITE_URL + '/images/og-default.jpg',
    favicon: SITE_URL + '/favicon.ico',
    logo: SITE_URL + '/images/logo.png',
  },
};
