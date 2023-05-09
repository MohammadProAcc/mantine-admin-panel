/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    CLIENT_API: "https://jsonplaceholder.ir",
    TOKEN: "__TKN_ASD",
  },
  compiler: {
    styledComponents: true
  }
};

module.exports = nextConfig;
