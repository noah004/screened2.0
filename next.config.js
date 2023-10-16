/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  images: {
    unoptimized: true,
    path: "",
  },
  assetPrefix: "/screened2.0/",
  output: "export",
  basePath: "/screened2.0",
};

module.exports = nextConfig;
