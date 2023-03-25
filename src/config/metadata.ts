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

const SITE_URL = 'https://melanies.dev';

export const siteMetadata = {
  siteUrl: SITE_URL,
  siteName: 'Developer blog of Melanie Seltzer',
  metaTitle: authorMetadata.name,
  metaDescription:
    'Developer blog and home on the web of Melanie Seltzer, a senior software engineer specializing in front-end development.',
  locale: 'en-US',
  timezone: 'America/Los_Angeles',
  theme: 'system',
  images: {
    socialBanner: SITE_URL + '/images/og-default.jpg',
    favicon: SITE_URL + '/favicon.ico',
    logo: SITE_URL + '/images/logo.png',
  },
};
