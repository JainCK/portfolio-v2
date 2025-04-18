/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GITHUB_ACCESS_TOKEN: process.env.GITHUB_ACCESS_TOKEN,
  },
  output: "export",
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
