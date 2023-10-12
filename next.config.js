/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    loader: "akamai",
    path: "",
  },
  assetPrefix: "/screened2.0/",
  output: "export",
  basePath: "/screene2.0",
};

module.exports = nextConfig;
