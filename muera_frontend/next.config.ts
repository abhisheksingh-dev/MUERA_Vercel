import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

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

export default withNextIntl(nextConfig);
