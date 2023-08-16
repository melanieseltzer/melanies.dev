const SITE_URL = 'https://www.melanies.dev';

export const siteConfig = {
  siteUrl: SITE_URL,
  siteName: 'Developer blog of Melanie Seltzer',
  defaultMetaTitle: 'Melanie Seltzer',
  defaultMetaDescription:
    'Developer blog of Melanie Seltzer, a software engineer specializing in front-end development.',
  locale: 'en-US',
  timezone: 'America/Los_Angeles',
  images: {
    socialBanner: SITE_URL + '/images/og-default.jpg',
    favicon: SITE_URL + '/favicon.ico',
    logo: SITE_URL + '/images/logo.png',
  },
  author: {
    name: 'Melanie Seltzer',
    email: 'melanie.seltzer1@gmail.com',
    occupation: 'Software Engineer',
    social: {
      github: 'https://github.com/melanieseltzer',
      twitter: 'https://twitter.com/melanieseltzer',
      linkedin: 'https://www.linkedin.com/in/melanieseltzer',
    },
  },
};
