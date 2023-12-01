/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      { hostname: "cloudflare-ipfs.com" },
      { hostname: "source.unsplash.com" },
    ],
  },
};

module.exports = nextConfig;
