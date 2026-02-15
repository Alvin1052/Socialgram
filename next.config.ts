import { url } from 'inspector';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      new URL(process.env.NEXT_PUBLIC_API_IMAGE_URL as string),
    ],
  },
};

export default nextConfig;
