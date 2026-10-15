/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/amorecitylab",
  assetPrefix: "/amorecitylab/",
  env: {
    NEXT_PUBLIC_BASE_PATH: "/amorecitylab",
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
