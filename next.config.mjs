/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        GITHUB_ACCESS_TOKEN: process.env.GITHUB_ACCESS_TOKEN,
      },
};

export default nextConfig;
