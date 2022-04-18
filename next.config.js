const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const withTM = require("next-transpile-modules")([
  "@kickstartds/core",
  "@kickstartds/base",
  "@kickstartds/content",
]);

/** @type {import('next').NextConfig} */
const nextConfig = withTM(
  withBundleAnalyzer({
    reactStrictMode: true,
    images: {
      domains: ['i1.sndcdn.com'],
    },
    target: 'serverless',
    generateBuildId: () => "build",
  })
);

module.exports = nextConfig
