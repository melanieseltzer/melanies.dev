import fs from 'fs';

import { Feed } from 'feed';

import { siteConfig } from '~/config/site';

export default async function generateRSS() {
  // have to import esm this way
  const { allBlogPosts } = await import('../.contentlayer/generated/index.mjs');

  const author = {
    name: siteConfig.author.name,
    email: siteConfig.author.email,
    link: siteConfig.siteUrl,
  };

  const feed = new Feed({
    title: siteConfig.siteName,
    description: siteConfig.defaultMetaDescription,
    id: siteConfig.siteUrl,
    link: siteConfig.siteUrl,
    image: `${siteConfig.images.logo}`,
    favicon: `${siteConfig.images.favicon}`,
    copyright: `Copyright © ${new Date().getFullYear()} ${
      siteConfig.author.name
    }`,
    feedLinks: {
      rss2: `${siteConfig.siteUrl}/feed.xml`,
    },
    author,
  });

  allBlogPosts.forEach(post => {
    const slug = `${siteConfig.siteUrl}/blog/${post.slug}`;

    feed.addItem({
      id: slug,
      title: post.title,
      link: slug,
      description: post.summary,
      author: [author],
      contributor: [author],
      date: new Date(post.date),
      category: post.tags.map(tag => ({ name: tag.displayName })),
    });
  });

  fs.writeFileSync('./public/feed.xml', feed.rss2());
}

(async () => {
  await generateRSS();
})().catch(err => {
  console.error(err);
  throw err;
});
