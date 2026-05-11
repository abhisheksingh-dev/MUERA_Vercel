import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'commonms.s3.ap-south-1.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'res-configurator.mirrorsize.com',
      }
    ],
  },
};

export default nextConfig;
