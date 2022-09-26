/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["i4.hurimg.com"],
  },
};

module.exports = nextConfig;
