/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    SPACE_ID: "",
    CONTENTFUL_ACCESS_KEY: ""
  }
};

module.exports = nextConfig;