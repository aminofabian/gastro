import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'thispersondoesnotexist.com',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },  
};

export default nextConfig;
