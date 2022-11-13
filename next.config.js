/** @type {import('next').NextConfig} */
const nextConfig = {
    productionBrowserSourceMaps: true,
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["i4.hurimg.com", "hurriyet-spa-cms.herokuapp.com"],
    },
};

module.exports = nextConfig;
