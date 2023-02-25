const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const plugins = [withBundleAnalyzer];

const composePlugins = (phase, defaultConfig) =>
  plugins.reduce(
    (acc, plugin) => {
      const newConfig = plugin(acc);

      return typeof newConfig === 'function'
        ? newConfig(phase, defaultConfig)
        : newConfig;
    },
    { ...nextConfig }
  );

module.exports = composePlugins;
